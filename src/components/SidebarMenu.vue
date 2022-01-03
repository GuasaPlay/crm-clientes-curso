<template>
    <aside
        class="fixed w-[300px] h-full bg-sky-800 border-l-2 border-sky-800 overflow-y-auto"
    >
        <div class="px-3">
            <h3 class="text-white font-semibold text-2xl mt-10">
                CRM Mi Empresa
            </h3>
        </div>
        <ul class="w-full px-3 mt-7 space-y-2">
            <SidebarItem to="/">Clientes</SidebarItem>
            <SidebarItem to="/pedidos">Pedidos</SidebarItem>
            <SidebarItem to="/productos">Productos</SidebarItem>
        </ul>
    </aside>
</template>
<script setup>
import SidebarItem from "./SidebarItem.vue";
</script>
