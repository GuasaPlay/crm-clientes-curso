<template>
    <div class="relative w-full">
        <SidebarMenu />
    </div>

    <main
        class="absolute left-[300px] min-h-screen bg-slate-200 w-[calc(100%_-_300px)]"
    >
        <NavbarMain />

        <router-view> </router-view>
    </main>
</template>

<script setup>
import SidebarMenu from "./components/SidebarMenu.vue";
import NavbarMain from "./components/NavbarMain.vue";
</script>
