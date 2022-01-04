<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Nuevo producto
                </div>
                <button
                    class="w-10 h-10 flex justify-center items-center rounded-full transition-colors hover:bg-gray-100"
                    @click="closeModal"
                >
                    <XIcon class="w-6 h-6" />
                </button>
            </div>
            <div class="mt-3">
                <div>
                    <div class="grid grid-cols-1 gap-6 text-slate-600">
                        <div class="flex flex-col">
                            <div class="font-medium text-sm">Nombre</div>
                            <input
                                v-model="productName"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm font-medium">Existencia</div>
                            <input
                                v-model="productStock"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm font-medium">Precio</div>
                            <input
                                v-model="productPrice"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            class="w-full block px-3 py-2 text-white rounded font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                            @click="saveProduct"
                        >
                            Registrar producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </CModalScaffold>
</template>

<script setup>
import { useMutation } from "@vue/apollo-composable";

import { XIcon } from "@heroicons/vue/outline";
import CModalScaffold from "./CModalScaffold.vue";

import getProducts from "@/graphql/querys/getProducts";
import createProduct from "@/graphql/mutations/createProduct";
import { ref } from "vue";

defineProps({
    showModal: Boolean,
});

const emit = defineEmits(["closeModal"]);
const closeModal = () => emit("closeModal", false);

const productName = ref("");
const productPrice = ref("");
const productStock = ref("");

const { mutate, onDone } = useMutation(createProduct);

const saveProduct = () => {
    const product = {
        name: productName.value,
        price: parseFloat(productPrice.value),
        stock: parseInt(productStock.value),
    };

    mutate(
        { product },
        {
            update: (cache, { data: { createProduct } }) => {
                const { product } = createProduct;

                const data = cache.readQuery({ query: getProducts });

                const products = [product, ...data.getProducts.products];

                cache.writeQuery({
                    query: getProducts,
                    data: { getProducts: { ...data.getProducts, products } },
                });
            },
        }
    );
};

onDone(() => {
    closeModal();

    productName.value = "";
    productPrice.value = "";
    productStock.value = "";
});
</script>
