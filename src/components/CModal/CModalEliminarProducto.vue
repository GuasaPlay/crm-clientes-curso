<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Eliminar un producto
                </div>
                <button
                    class="w-10 h-10 flex justify-center items-center rounded-full transition-colors hover:bg-gray-100"
                    @click="closeModal"
                >
                    <XIcon class="w-6 h-6" />
                </button>
            </div>
            <div class="mt-3">
                <div class="font-normal text-lg text-slate-700">
                    ¿Quieres eliminar el producto {{ product.name }}?
                </div>
            </div>
            <div class="mt-6 flex justify-end">
                <button
                    class="w-auto block px-3 py-2 text-white rounded font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-sky-700/40"
                    @click="removeProduct"
                >
                    Eliminar producto
                </button>
            </div>
        </div>
    </CModalScaffold>
</template>

<script setup>
import deleteProduct from "@/graphql/mutations/deleteProduct";
import getProducts from "@/graphql/querys/getProducts";
import { XIcon } from "@heroicons/vue/outline";
import { useMutation } from "@vue/apollo-composable";
import CModalScaffold from "./CModalScaffold.vue";

const props = defineProps({
    showModal: Boolean,
    product: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["closeModal"]);
const closeModal = () => emit("closeModal", false);

const { mutate, onDone } = useMutation(deleteProduct);

const removeProduct = () => {
    const { product } = props;
    mutate(
        { productId: product.id },
        {
            update: (cache, { data: { deleteProduct } }) => {
                const { product } = deleteProduct;

                const data = cache.readQuery({ query: getProducts });

                const products = [...data.getProducts.products];

                const newProducts = products.filter((p) => p.id !== product.id);

                cache.writeQuery({
                    query: getProducts,
                    data: {
                        getProducts: {
                            ...data.getProducts,
                            products: newProducts,
                        },
                    },
                });
            },
        }
    );
};

onDone(() => {
    closeModal();
});
</script>
