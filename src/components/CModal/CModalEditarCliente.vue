<template>
    <CModalScaffold v-if="showModal">
        <div class="p-3 pb-6 sm:w-[450px]">
            <div class="h-10 w-full flex items-center relative">
                <div class="flex-1 font-medium text-lg text-slate-700">
                    Editar producto
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
                                v-model="clientName"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm font-medium">
                                Correo electrónico
                            </div>
                            <input
                                v-model="clientEmail"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm font-medium">Empresa</div>
                            <input
                                v-model="clientCompany"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm font-medium">Teléfono</div>
                            <input
                                v-model="clientPhone"
                                class="rounded-md border-2 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                type="text"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            class="w-full block px-3 py-2 text-white rounded font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                            @click="editClient"
                        >
                            Editar producto
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

import { ref, watch } from "vue";
import updateClient from "@/graphql/mutations/updateClient";

const props = defineProps({
    showModal: Boolean,
    client: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["closeModal"]);
const closeModal = () => emit("closeModal", false);

const clientName = ref("");
const clientCompany = ref("");
const clientEmail = ref("");
const clientPhone = ref("");

watch(
    () => props.client,
    () => {
        const { name, email, company, phone } = props.client;
        clientName.value = name;
        clientEmail.value = email;
        clientCompany.value = company;
        clientPhone.value = phone;
    }
);

const { mutate, onDone } = useMutation(updateClient);

const editClient = () => {
    const client = {
        name: clientName.value,
        email: clientEmail.value,
        company: clientCompany.value,
        phone: clientPhone.value,
    };

    mutate({ clientId: props.client.id, client });
};

onDone(() => {
    closeModal();

    clientName.value = "";
    clientEmail.value = "";
    clientCompany.value = "";
    clientPhone.value = "";
});
</script>
