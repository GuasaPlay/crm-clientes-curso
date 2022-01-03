import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Pedidos from "@/views/Pedidos.vue";
import Productos from "@/views/Productos.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/pedidos", name: "Pedidos", component: Pedidos },
    { path: "/productos", name: "Productos", component: Productos },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
