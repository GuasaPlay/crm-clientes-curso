<template>
    <div class="px-3 mt-10">
        <FormNuevoPedido
            :open-form="isOpenFormNuevoPedido"
            @close-form="isOpenFormNuevoPedido = false"
        />

        <div class="max-w-[900px] mx-auto mt-4">
            <h1 class="text-3xl font-semibold text-slate-700">Pedidos</h1>
            <div v-if="!isOpenFormNuevoPedido" class="mt-4">
                <button
                    class="px-3 py-2 text-white rounded-md font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                    @click="isOpenFormNuevoPedido = true"
                >
                    Nuevo pedido
                </button>
            </div>
        </div>
        <div class="max-w-[900px] mx-auto mt-6">
            <div class="flex flex-col space-y-4">
                <div
                    class="w-full bg-white rounded-lg py-4 px-3 border-t-[6px] border-green-500 shadow-md shadow-green-500/10"
                >
                    <div class="flex">
                        <div class="w-full flex flex-col justify-between">
                            <div>
                                <div class="text-lg font-semibold">
                                    Cliente: Sandra Espinoza
                                </div>
                                <div class="mt-2">
                                    <div class="flex items-end">
                                        <span class=" ">
                                            <MailIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700"
                                            >sandraer04@gmail.com</span
                                        >
                                    </div>
                                    <div class="flex items-center mt-2">
                                        <span class=" ">
                                            <PhoneIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700"
                                            >0990813254</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="font-semibold textlg mb-1.5">
                                    Estado del pedido:
                                </div>
                                <div
                                    class="px-3 py-1.5 text-white rounded-full text-sm font-medium bg-green-600 inline-block"
                                >
                                    ENTREGADO
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="text-lg font-semibold mb-1">
                                Resumen del Pedido
                            </div>
                            <div
                                class="space-y-3 divide-y divide-gray-300 max-h-[300px] overflow-auto"
                            >
                                <div class="pt-3">
                                    <div
                                        class="text-slate-500 text-sm font-medium"
                                    >
                                        Producto:
                                        <span class="font-normal"
                                            >Laptop HP Core i7 16BG RAM</span
                                        >
                                    </div>
                                    <div
                                        class="text-slate-500 text-sm font-medium mt-2"
                                    >
                                        Cantidad:
                                        <span class="font-normal">1</span>
                                    </div>
                                    <div
                                        class="text-slate-500 text-sm font-medium mt-2"
                                    >
                                        Precio por unidad:
                                        <span class="font-normal">$1250</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="text-base font-semibold">
                                    Total a Pagar:
                                    <span class="font-normal">$900</span>
                                </div>
                            </div>
                            <!-- <div class="mt-4 flex space-x-2">
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-green-600/40 transition-colors bg-green-600 hover:bg-green-700 hover:shadow-sky-700/40"
                                >
                                    Despachar pedido
                                </button>
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-sky-700/40"
                                >
                                    Anular pedido
                                </button>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div
                    class="w-full bg-white rounded-lg py-4 px-3 border-t-[6px] border-yellow-500 shadow-md shadow-yellow-500/10"
                >
                    <div class="flex">
                        <div class="w-full flex flex-col justify-between">
                            <div>
                                <div class="text-lg font-semibold">
                                    Cliente: Pedro Carchi
                                </div>
                                <div class="mt-2">
                                    <div class="flex items-end">
                                        <span class=" ">
                                            <MailIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700"
                                            >pedro51654@gmail.com</span
                                        >
                                    </div>
                                    <div class="flex items-center mt-2">
                                        <span class=" ">
                                            <PhoneIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700"
                                            >0998715456</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="font-semibold textlg mb-1.5">
                                    Estado del pedido:
                                </div>
                                <div
                                    class="px-3 py-1.5 text-white rounded-full text-sm font-medium bg-yellow-600 inline-block"
                                >
                                    PENDIENTE
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="text-lg font-semibold mb-1">
                                Resumen del Pedido
                            </div>
                            <div
                                class="space-y-3 divide-y divide-gray-300 max-h-[300px] overflow-auto"
                            >
                                <div class="pt-3">
                                    <div
                                        class="text-slate-500 text-sm font-medium"
                                    >
                                        Producto:
                                        <span class="font-normal"
                                            >Monitor LG 27 Pulgadas</span
                                        >
                                    </div>
                                    <div
                                        class="text-slate-500 text-sm font-medium mt-2"
                                    >
                                        Cantidad:
                                        <span class="font-normal">1</span>
                                    </div>
                                    <div
                                        class="text-slate-500 text-sm font-medium mt-2"
                                    >
                                        Precio por unidad:
                                        <span class="font-normal">$240</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="text-base font-semibold">
                                    Total a Pagar:
                                    <span class="font-normal">$240</span>
                                </div>
                            </div>
                            <div class="mt-4 flex space-x-2">
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-green-600/40 transition-colors bg-green-600 hover:bg-green-700 hover:shadow-sky-700/40"
                                >
                                    Despachar pedido
                                </button>
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-sky-700/40"
                                >
                                    Anular pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
import FormNuevoPedido from "@/components/FormNuevoPedido.vue";
import { ref } from "vue";

const isOpenFormNuevoPedido = ref(false);
</script>

<style lang="postcss"></style>
