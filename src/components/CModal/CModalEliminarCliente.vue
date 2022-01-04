<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Eliminar un cliente
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
                    ¿Quieres eliminar al cliente {{ client.name }}?
                </div>
            </div>
            <div class="mt-6 flex justify-end">
                <button
                    class="w-auto block px-3 py-2 text-white rounded font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-sky-700/40"
                    @click="removeClient"
                >
                    Eliminar cliente
                </button>
            </div>
        </div>
    </CModalScaffold>
</template>

<script setup>
import deleteClient from "@/graphql/mutations/deleteClient";
import getClients from "@/graphql/querys/getClients";
import { XIcon } from "@heroicons/vue/outline";
import { useMutation } from "@vue/apollo-composable";
import CModalScaffold from "./CModalScaffold.vue";

const props = defineProps({
    showModal: Boolean,
    client: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["closeModal"]);
const closeModal = () => emit("closeModal", false);

const { mutate, onDone } = useMutation(deleteClient);

const removeClient = () => {
    const { client } = props;
    mutate(
        { clientId: client.id },
        {
            update: (cache, { data: { deleteClient } }) => {
                const { client } = deleteClient;

                const data = cache.readQuery({ query: getClients });

                const clients = [...data.getClients.clients];

                const newClients = clients.filter((c) => c.id !== client.id);

                cache.writeQuery({
                    query: getClients,
                    data: {
                        getClients: {
                            ...data.getClients,
                            clients: newClients,
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
