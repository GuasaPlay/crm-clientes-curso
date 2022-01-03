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
                                    class="rounded-md flex-1 bg-white shadow-md transition-colors px-3 py-1"
                                >
                                    <span class="text-gray-400">
                                        Aun no se ha seleccionado un cliente
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
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
                                    class="rounded-md flex-1 bg-white shadow-md transition-colors px-3 py-1"
                                >
                                    <span class="text-gray-400">
                                        Aun no se ha seleccionado ningun
                                        producto
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
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
                                    <div class="flex w-full items-center">
                                        <div
                                            class="flex-1 text-slate-700 flex flex-col"
                                        >
                                            <span
                                                class="text-sm font-normal line-clamp-1"
                                                >Monitor de 21 pulgadas</span
                                            >
                                            <span class="text-sm font-medium"
                                                >$500</span
                                            >
                                        </div>
                                        <input
                                            class="rounded-md border-2 h-9 border-gray-300 shadow transition-colors focus:shadow-sky-600/50 focus:border-sky-600 focus:outline-none px-3 py-1"
                                            type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="space-x-2 flex justify-end mt-10 border-t border-gray-400 pt-4"
                        >
                            <button
                                type="submit"
                                class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-sky-600/40 transition-colors bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700/40"
                            >
                                Registrar pedido
                            </button>
                            <button
                                type="button"
                                class="px-3 py-1.5 h-9 text-white rounded text-sm font-medium shadow-md shadow-red-600/40 transition-colors bg-red-600 hover:bg-red-700 hover:shadow-red-700/40"
                                @click="closeForm"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    openForm: Boolean,
});

const emit = defineEmits(["closeForm"]);

const closeForm = () => emit("closeForm");
</script>
