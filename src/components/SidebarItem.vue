<template>
    <li class="relative w-full">
        <router-link
            class="px-3 py-3 w-full block rounded-lg text-white font-medium hover:bg-sky-700 transition-colors"
            active-class="bg-sky-700"
            :to="to"
        >
            <slot />
        </router-link>
    </li>
</template>
<script setup>
defineProps({
    to: String,
});
</script>
