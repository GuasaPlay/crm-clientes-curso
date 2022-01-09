<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Buscar un cliente
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
                                @input="searchClient"
                            />
                        </div>
                    </div>
                    <div v-if="networkStatus === 1 && !clients">
                        Cargando datos...
                    </div>
                    <div v-else-if="error">Error: {{ error.message }}</div>
                    <div v-else-if="clients" class="mt-4">
                        <div class="text-sm font-medium">
                            Clientes encontrados: {{ clients.length }}
                        </div>
                        <div
                            class="flex flex-col divide-y divide-gray-300 mt-2"
                        >
                            <button
                                v-for="client in clients"
                                :key="client.id"
                                class="py-2 px-3 cursor-pointer hover:bg-gray-100 text-left"
                                @click="selectClient(client)"
                            >
                                <div class="font-normal">{{ client.name }}</div>
                                <span class="text-sm font-normal">{{
                                    client.email
                                }}</span>
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
import getClients from "@/graphql/querys/getClients";

defineProps({
    showModal: Boolean,
});

const emit = defineEmits(["closeModal", "selectClient"]);
const closeModal = () => {
    emit("closeModal", false);
    search.value = "";
};

const search = ref("");

const enabledQuery = ref(false);

const { result, error, networkStatus } = useQuery(
    getClients,
    () => ({
        search: search.value.length === 0 ? null : search.value,
    }),
    { enabled: enabledQuery }
);
const clients = useResult(result, null, (data) => data.getClients.clients);

const searchClient = async () => (enabledQuery.value = true);

const selectClient = (client) => {
    emit("selectClient", client);

    closeModal();
};
</script>
