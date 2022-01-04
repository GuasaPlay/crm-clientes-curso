<template>
    <div class="px-3 mt-10">
        <div class="max-w-[900px] mx-auto mt-4">
            <h1 class="text-3xl font-semibold text-slate-700">Clientes</h1>
            <div class="mt-4">
                <button
                    class="px-3 py-2 text-white rounded-md font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                    @click="openModalNuevoCliente"
                >
                    Nuevo cliente
                </button>
            </div>
        </div>
        <div class="max-w-[900px] mx-auto mt-4">
            <div v-if="loading">Cargando datos...</div>
            <div v-else-if="error">Error: {{ error.message }}</div>
            <div v-else-if="clients" class="flex flex-col">
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
                                    <CTableBodyRow
                                        v-for="client in clients"
                                        :key="client.id"
                                    >
                                        <CTableBodyData>
                                            <div class="flex">
                                                <div>
                                                    <div
                                                        class="text-sm font-medium text-gray-900"
                                                    >
                                                        {{ client.name }}
                                                    </div>
                                                    <div
                                                        class="text-sm text-gray-500"
                                                    >
                                                        {{ client.email }}
                                                    </div>
                                                </div>
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                {{ client.company }}
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div class="text-sm text-gray-900">
                                                {{ client.phone }}
                                            </div>
                                        </CTableBodyData>
                                        <CTableBodyData>
                                            <div
                                                class="flex space-x-1 text-sm font-medium"
                                            >
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-sky-600 hover:bg-sky-700"
                                                    @click="
                                                        openModalEditarCliente(
                                                            client
                                                        )
                                                    "
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    class="text-white rounded px-2 py-1 bg-red-600 hover:bg-red-700"
                                                    @click="
                                                        openModalEliminarCliente(
                                                            client
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
                            <div
                                v-if="clients.length === 0"
                                class="text-center px-3 py-2 text-slate-700 font-normal bg-white"
                            >
                                No existen productos disponibles
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CModalNuevoCliente
        :show-modal="showModalNuevoCliente"
        @close-modal="closeModalNuevoCliente"
    />

    <CModalEditarCliente
        :client="clientSelected"
        :show-modal="showModalEditarCliente"
        @close-modal="closeModalEditarCliente"
    />

    <CModalEliminarCliente
        :client="clientSelected"
        :show-modal="showModalEliminarCliente"
        @close-modal="closeModalEliminarCliente"
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

import useModalCliente from "@/composables/useModalCliente";
import getClients from "@/graphql/querys/getClients";
import { useQuery, useResult } from "@vue/apollo-composable";
import CModalEliminarCliente from "@/components/CModal/CModalEliminarCliente.vue";
import CModalEditarCliente from "@/components/CModal/CModalEditarCliente.vue";

const {
    clientSelected,
    closeModalNuevoCliente,
    openModalNuevoCliente,
    showModalNuevoCliente,
    closeModalEliminarCliente,
    openModalEliminarCliente,
    showModalEliminarCliente,
    closeModalEditarCliente,
    openModalEditarCliente,
    showModalEditarCliente,
} = useModalCliente();

const { result, error, loading } = useQuery(getClients, null, {
    fetchPolicy: "cache-and-network",
});
const clients = useResult(result, null, (data) => data.getClients.clients);
</script>

<style lang="postcss"></style>
