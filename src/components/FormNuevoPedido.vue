<template>
    <div v-if="openForm" class="max-w-[500px] mx-auto mt-4 mb-8">
        <h1 class="text-3xl font-semibold text-slate-700">Nuevo pedido</h1>
        <div class="mt-4">
            <div class="p-3 border border-gray-400 rounded-lg">
                <div>
                    <form class="mb-3 text-slate-700" @click.prevent>
                        <div>
                            <div
                                class="bg-white py-1.5 px-2 border-l-4 font-medium border-sky-800"
                            >
                                1.- Asignar un Cliente al pedido
                            </div>
                            <div class="mt-3 flex space-x-3">
                                <div
                                    class="rounded-md flex-1 bg-white shadow-md transition-colors px-3 py-1 flex items-center"
                                >
                                    <span
                                        v-if="selectedClient"
                                        class="text-slate-700 font-medium"
                                    >
                                        {{ selectedClient.name }}
                                    </span>
                                    <span v-else class="text-gray-400">
                                        Aun no se ha seleccionado un cliente
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                                    @click="openModalBuscarCliente"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                        <div class="mt-9">
                            <div
                                class="bg-white py-1.5 px-2 border-l-4 font-medium border-sky-800"
                            >
                                2.- Selecciona o busca los productos
                            </div>
                            <div class="mt-3 flex space-x-3">
                                <div
                                    class="rounded-md flex-1 bg-white shadow-md transition-colors px-3 py-1 flex items-center"
                                >
                                    <div
                                        v-if="selectedProducts.length > 0"
                                        class="flex flex-wrap"
                                    >
                                        <div
                                            v-for="product in selectedProducts"
                                            :key="product.id"
                                            class="text-slate-700 text-sm font-medium bg-gray-200 rounded px-1 py-0.5 mr-2 my-1"
                                        >
                                            {{ product.name }} - ({{
                                                calculateStock(product)
                                            }}
                                            existencias)
                                        </div>
                                    </div>
                                    <span v-else class="text-gray-400">
                                        Aun no se ha seleccionado ningun
                                        producto
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                                    @click="openModalBuscarProducto"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                        <div class="mt-9">
                            <div
                                class="bg-white py-1.5 px-2 border-l-4 font-medium border-sky-800"
                            >
                                3.- Ajusta las cantidades del producto
                            </div>
                            <div class="mt-3 flex flex-col">
                                <!-- <span class="mt-1 text-sm font-medium"
                                    >Aun no hay productos</span
                                > -->
                                <div class="w-full space-y-4">
                                    <div
                                        v-for="product in selectedProducts"
                                        :key="product.id"
                                        class="flex w-full items-center"
                                    >
                                        <div
                                            class="flex-1 text-slate-700 flex flex-col"
                                        >
                                            <span
                                                class="text-sm font-normal line-clamp-1"
                                                >{{ product.name }}</span
                                            >
                                            <span class="text-sm font-medium"
                                                >${{ product.price }}</span
                                            >
                                        </div>
                                        <input
                                            v-model="product.quantity"
                                            class="rounded-md border-2 h-9 max-w-[60px] border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                            type="number"
                                            @input="validateQuantity(product)"
                                            @blur="validateInput(product)"
                                        />
                                        <div class="ml-1.5">
                                            <button
                                                class="w-8 h-8 bg-red-500 flex justify-center items-center text-white rounded-md transition-colors hover:bg-red-600"
                                                @click="
                                                    removeProductToList(product)
                                                "
                                            >
                                                <XIcon class="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 border-t border-gray-400 pt-2">
                            <div class="flex justify-end text-slate-700">
                                <span class="font-medium">Total a pagar:</span>
                                $ {{ calculateTotalToPay }}
                            </div>
                            <div class="space-x-2 flex justify-end pt-4">
                                <button
                                    type="submit"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                                    @click="saveOrder"
                                >
                                    Registrar pedido
                                </button>
                                <button
                                    type="button"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-red-700/40"
                                    @click="cancelOrder"
                                >
                                    Cancelar
                                </button>
                            </div>

                            <div
                                v-if="showMessage"
                                class="mt-4 bg-yellow-500 rounded-md text-white px-3 py-2 font-medium"
                            >
                                Algunos campos estan incompletos
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <CModalBuscarCliente
        :show-modal="showModalBuscarCliente"
        @close-modal="closeModalBuscarCliente"
        @select-client="(client) => (selectedClient = client)"
    />
    <CModalBuscarProducto
        :show-modal="showModalBuscarProducto"
        @close-modal="closeModalBuscarProducto"
        @select-product="selectProduct"
    />
</template>
<script setup>
import { XIcon } from "@heroicons/vue/outline";

import useModalOrder from "@/composables/useModalOrder";
import CModalBuscarCliente from "@/components/CModal/CModalBuscarCliente.vue";

import { computed, ref } from "vue-demi";
import CModalBuscarProducto from "./CModal/CModalBuscarProducto.vue";
import { useMutation } from "@vue/apollo-composable";
import createOrder from "@/graphql/mutations/createOrder";
import getOrders from "@/graphql/querys/getOrders";

defineProps({
    openForm: Boolean,
});

const emit = defineEmits(["closeForm"]);
const closeForm = () => emit("closeForm");

const {
    openModalBuscarCliente,
    showModalBuscarCliente,
    closeModalBuscarCliente,

    openModalBuscarProducto,
    showModalBuscarProducto,
    closeModalBuscarProducto,
} = useModalOrder();

const selectedClient = ref();
const selectedProducts = ref([]);
const totalToPay = ref(0);

const showMessage = ref(false);

const selectProduct = (product) => {
    const { id } = product;

    const existProduct = selectedProducts.value.find((p) => p.id === id);

    if (existProduct) return;

    selectedProducts.value.push({ ...product, quantity: 1 });
};

const removeProductToList = (product) => {
    const newProducts = selectedProducts.value.filter(
        (p) => p.id !== product.id
    );

    selectedProducts.value = newProducts;
};

const calculateTotalToPay = computed(() => {
    let total = 0;
    selectedProducts.value.forEach((product) => {
        const { price, quantity } = product;
        const partialTotal = price * quantity;
        total = total + partialTotal;
    });

    totalToPay.value = total;
    return total.toFixed(2);
});

const calculateStock = (product) => {
    const { stock, quantity } = product;
    return stock - quantity;
};

const validateQuantity = (product) => {
    const { quantity, stock } = product;
    const index = selectedProducts.value.indexOf(product);

    if (quantity < 0) {
        selectedProducts.value.splice(index, 1, { ...product, quantity: 1 });
    }

    if (quantity > stock) {
        selectedProducts.value.splice(index, 1, {
            ...product,
            quantity: stock,
        });
    }
};
const validateInput = (product) => {
    const { quantity } = product;
    const index = selectedProducts.value.indexOf(product);
    if (quantity < 1) {
        selectedProducts.value.splice(index, 1, { ...product, quantity: 1 });
    }
};

const cancelOrder = () => {
    closeForm();
    selectedClient.value = null;
    selectedProducts.value = [];
};

const { mutate, onDone } = useMutation(createOrder);

const saveOrder = () => {
    if (!selectedClient.value || selectedProducts.value.length === 0) {
        showMessage.value = true;

        setTimeout(() => {
            showMessage.value = false;
        }, 3000);
        return;
    }

    const orderDetail = selectedProducts.value.map((product) => {
        const { id, name, price, quantity } = product;
        return {
            productId: id,
            productName: name,
            productPrice: price,
            productQuantity: quantity,
        };
    });

    const order = {
        clientId: selectedClient.value.id,
        orderStatus: "PENDING",
        totalPay: totalToPay.value,
        orderDetail,
    };

    mutate(
        { order },
        {
            update: (cache, { data: { createOrder } }) => {
                const { order } = createOrder;

                const data = cache.readQuery({ query: getOrders });

                const orders = [order, ...data.getOrders.orders];

                cache.writeQuery({
                    query: getOrders,
                    data: { getOrders: { ...data.getOrders, orders } },
                });
            },
        }
    );
};

onDone(() => {
    closeForm();
    selectedClient.value = null;
    selectedProducts.value = [];
});
</script>
