<template>
    <h1 class="text-3xl font-bold underline">Hola mundo</h1>
    <h3>{{ counter }}</h3>
</template>

<script setup>
import { ref } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

const counter = ref(5);
</script>
