<template>
    <div class="px-3 mt-10">
        <div class="max-w-[900px] mx-auto mt-4">
            <h1 class="text-3xl font-semibold text-slate-700">Clientes</h1>
            <div class="mt-4">
                <button
                    class="px-3 py-2 text-white rounded-md font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                    @click="openModalCliente"
                >
                    Nuevo cliente
                </button>
            </div>
        </div>
        <div class="max-w-[900px] mx-auto mt-4">
            <div class="flex flex-col">
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
                                            Empresa
                                        </CTableHeadCell>
                                        <CTableHeadCell>
                                            Teléfono
                                        </CTableHeadCell>
                                        <CTableHeadCell>
                                            Acciones
                                        </CTableHeadCell>
                                    </CTableHeadRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableBodyRow>
                                        <CTableBodyData>
                                            <div class="flex">
                                                <div>
                                                    <div
                                                        class="text-sm font-medium text-gray-900"
                                                    >
                                                        Sandra Espinoza
                                                    </div>
                                                    <div
                                                        class="text-sm text-gray-500"
                                                    >
                                                        sandraer04@gmail.com
                                                    </div>
                                                </div>
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                Grontix S.A.
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                0908154654
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div
                                                class="flex space-x-1 text-sm font-medium"
                                            >
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-sky-600 hover:bg-sky-700"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-700"
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
    <CModalNuevoCliente
        :show-modal="showModalNuevoCliente"
        @close-modal="closeModal"
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
import CModalNuevoCliente from "@/components/CModal/CModalNuevoCliente.vue";

import { ref } from "vue";

const showModalNuevoCliente = ref(false);

const openModalCliente = () => {
    showModalNuevoCliente.value = true;
};

const closeModal = () => {
    showModalNuevoCliente.value = false;
};
</script>

<style lang="postcss"></style>
