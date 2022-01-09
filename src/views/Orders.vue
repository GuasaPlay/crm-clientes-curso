<template>
    <div class="px-3 mt-10 mb-10">
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
        <div class="max-w-[900px] mx-auto mt-8">
            <div v-if="networkStatus === 1 && !orders">Cargando datos...</div>
            <div v-else-if="error">Error: {{ error.message }}</div>
            <div v-else-if="orders" class="flex flex-col space-y-8">
                <div
                    v-for="order in orders"
                    :key="order.id"
                    class="w-full bg-white rounded-lg py-4 px-3 border-t-[6px] shadow-md"
                    :class="parseOrderStatus(order).colorBorderStatus"
                >
                    <div class="flex">
                        <div class="w-full flex flex-col justify-between">
                            <div>
                                <div class="text-lg font-semibold">
                                    Cliente: {{ order.client.name }}
                                </div>
                                <div class="mt-2">
                                    <div class="flex items-end">
                                        <span class=" ">
                                            <MailIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700">{{
                                            order.client.email
                                        }}</span>
                                    </div>
                                    <div class="flex items-center mt-2">
                                        <span class=" ">
                                            <PhoneIcon
                                                class="h-5 w-5 text-slate-700"
                                            />
                                        </span>
                                        <span class="ml-1 text-slate-700">{{
                                            order.client.phone
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="font-semibold textlg mb-1.5">
                                    Estado del pedido:
                                </div>
                                <div
                                    class="px-3 py-1.5 text-white rounded-full text-sm font-medium inline-block"
                                    :class="parseOrderStatus(order).colorStatus"
                                >
                                    {{ parseOrderStatus(order).textStatus }}
                                </div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="text-lg font-semibold mb-1">
                                Resumen del Pedido
                            </div>
                            <div class="space-y-3 divide-y divide-gray-300">
                                <div
                                    v-for="orderD in order.orderDetail"
                                    :key="orderD.id"
                                    class="max-h-[300px] overflow-auto"
                                >
                                    <div class="pt-3">
                                        <div
                                            class="text-slate-500 text-sm font-medium"
                                        >
                                            Producto:
                                            <span class="font-normal">{{
                                                orderD.productName
                                            }}</span>
                                        </div>
                                        <div
                                            class="text-slate-500 text-sm font-medium mt-2"
                                        >
                                            Cantidad:
                                            <span class="font-normal">{{
                                                orderD.productQuantity
                                            }}</span>
                                        </div>
                                        <div
                                            class="text-slate-500 text-sm font-medium mt-2"
                                        >
                                            Precio por unidad:
                                            <span class="font-normal"
                                                >${{
                                                    orderD.productPrice
                                                }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 border-t-2 border-gray-300 pt-4">
                                <div class="text-base font-semibold">
                                    Total a Pagar:
                                    <span class="font-normal"
                                        >${{ order.totalPay }}</span
                                    >
                                </div>
                            </div>
                            <div
                                v-if="order.orderStatus === 'PENDING'"
                                class="mt-4 flex space-x-2"
                            >
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-green-600/40 transition-colors bg-green-600 hover:bg-green-700 hover:shadow-sky-700/40"
                                    @click="dispatchOrder(order)"
                                >
                                    Despachar pedido
                                </button>
                                <button
                                    class="px-3 py-1.5 text-white rounded text-sm font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-sky-700/40"
                                    @click="cancelOrder(order)"
                                >
                                    Anular pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="orders.length === 0"
                    class="text-center px-3 py-2 text-slate-700 font-normal bg-white rounded-lg"
                >
                    Aun no hay pedidos
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
import FormNuevoPedido from "@/components/FormNuevoPedido.vue";
import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import getOrders from "@/graphql/querys/getOrders";
import useParseOrderStatus from "@/composables/useParseOrderStatus";
import useActionsOrder from "@/composables/useActionsOrder";

const isOpenFormNuevoPedido = ref(false);

const { parseOrderStatus } = useParseOrderStatus();

const { result, error, networkStatus } = useQuery(getOrders, null, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
});
const orders = useResult(result, null, (data) => data.getOrders.orders);

const { dispatchOrder, cancelOrder } = useActionsOrder();
</script>

<style lang="postcss"></style>
