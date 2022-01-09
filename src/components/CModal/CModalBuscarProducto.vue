<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Buscar un producto
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
                            <input
                                v-model="search"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                placeholder="Empieza escribir"
                                type="text"
                                @input="searchProduct"
                            />
                        </div>
                    </div>
                    <div v-if="networkStatus === 1 && !products">
                        Cargando datos...
                    </div>
                    <div v-else-if="error">Error: {{ error.message }}</div>
                    <div v-else-if="products" class="mt-4">
                        <div class="text-sm font-medium">
                            Clientes encontrados: {{ products.length }}
                        </div>
                        <div
                            class="flex flex-col divide-y divide-gray-300 mt-2"
                        >
                            <button
                                v-for="product in products"
                                :key="product.id"
                                class="py-2 px-3 cursor-pointer hover:bg-gray-100 text-left"
                                @click="selectProduct(product)"
                            >
                                <div class="font-normal">
                                    {{ product.name }}
                                </div>
                                <span class="text-sm font-normal"
                                    >{{ product.stock }} Existencias</span
                                >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CModalScaffold>
</template>

<script setup>
import { useQuery, useResult } from "@vue/apollo-composable";

import { XIcon } from "@heroicons/vue/outline";
import CModalScaffold from "./CModalScaffold.vue";

import { ref } from "vue";
import getProducts from "@/graphql/querys/getProducts";

defineProps({
    showModal: Boolean,
});

const emit = defineEmits(["closeModal", "selectProduct"]);
const closeModal = () => {
    emit("closeModal", false);
    search.value = "";
};

const search = ref("");

const enabledQuery = ref(false);

const { result, error, networkStatus, refetch } = useQuery(
    getProducts,
    () => ({
        search: search.value.length === 0 ? null : search.value,
    }),
    { enabled: enabledQuery }
);
const products = useResult(result, null, (data) => data.getProducts.products);

const searchProduct = async () => {
    enabledQuery.value = true;
    refetch();
};

const selectProduct = (product) => {
    const { stock } = product;

    if (stock === 0) return;

    emit("selectProduct", product);

    closeModal();
};
</script>
