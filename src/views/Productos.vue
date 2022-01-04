<template>
    <div class="px-3 mt-10">
        <div class="max-w-[900px] mx-auto mt-4">
            <h1 class="text-3xl font-semibold text-slate-700">Productos</h1>
            <div class="mt-4">
                <button
                    class="px-3 py-2 text-white rounded-md font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                    @click="openModalNuevoProducto"
                >
                    Nuevo producto
                </button>
            </div>
        </div>
        <div class="max-w-[900px] mx-auto mt-4">
            <div v-if="loading">Cargando datos...</div>
            <div v-else-if="error">Error: {{ error.message }}</div>
            <div v-else-if="products" class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="py-2 align-middle inline-block min-w-full">
                        <div
                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                        >
                            <CTable>
                                <CTableHead>
                                    <CTableHeadRow>
                                        <CTableHeadCell>
                                            Nombre
                                        </CTableHeadCell>
                                        <CTableHeadCell>
                                            Existencia
                                        </CTableHeadCell>
                                        <CTableHeadCell>
                                            Precio
                                        </CTableHeadCell>
                                        <CTableHeadCell>
                                            Acciones
                                        </CTableHeadCell>
                                    </CTableHeadRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableBodyRow
                                        v-for="product in products"
                                        :key="product.id"
                                    >
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                {{ product.name }}
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                {{ product.stock }} Unidades
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                $ {{ product.price }}
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div
                                                class="flex space-x-1 text-sm font-medium"
                                            >
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-sky-600 hover:bg-sky-700"
                                                    @click="
                                                        openModalEditarProducto(
                                                            product
                                                        )
                                                    "
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-700"
                                                    @click="
                                                        openModalEliminarProducto(
                                                            product
                                                        )
                                                    "
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </CTableBodyData>
                                    </CTableBodyRow>
                                </CTableBody>
                            </CTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CModelNuevoProducto
        :show-modal="showModalNuevoProducto"
        @close-modal="closeModalNuevoProducto"
    />
    <CModelEditarProducto
        :product="productSelected"
        :show-modal="showModalEditarProducto"
        @close-modal="closeModalEditarProducto"
    />
    <CModalEliminarProducto
        :product="productSelected"
        :show-modal="showModalEliminarProducto"
        @close-modal="closeModalEliminarProducto"
    />
</template>

<script setup>
import CTable from "../components/CTable/CTable.vue";
import CTableHead from "../components/CTable/CTableHead.vue";
import CTableHeadRow from "../components/CTable/CTableHeadRow.vue";
import CTableHeadCell from "../components/CTable/CTableHeadCell.vue";
import CTableBody from "../components/CTable/CTableBody.vue";
import CTableBodyRow from "../components/CTable/CTableBodyRow.vue";
import CTableBodyData from "../components/CTable/CTableBodyData.vue";
import CModelNuevoProducto from "@/components/CModal/CModelNuevoProducto.vue";
import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";

import getProducts from "@/graphql/querys/getProducts";
import CModalEliminarProducto from "@/components/CModal/CModalEliminarProducto.vue";
import CModelEditarProducto from "@/components/CModal/CModelEditarProducto.vue";

const showModalNuevoProducto = ref(false);
const openModalNuevoProducto = () => (showModalNuevoProducto.value = true);
const closeModalNuevoProducto = () => (showModalNuevoProducto.value = false);

const showModalEditarProducto = ref(false);
const openModalEditarProducto = (product) => {
    showModalEditarProducto.value = true;
    productSelected.value = product;
};
const closeModalEditarProducto = () => {
    showModalEditarProducto.value = false;
    productSelected.value = {};
};

const showModalEliminarProducto = ref(false);
const openModalEliminarProducto = (product) => {
    showModalEliminarProducto.value = true;
    productSelected.value = product;
};
const closeModalEliminarProducto = () =>
    (showModalEliminarProducto.value = false);

const productSelected = ref({});

const { result, error, loading } = useQuery(getProducts, null, {
    fetchPolicy: "cache-and-network",
});
const products = useResult(result, null, (data) => data.getProducts.products);
</script>

<style lang="postcss"></style>
