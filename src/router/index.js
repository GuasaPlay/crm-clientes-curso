import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Orders from "@/views/Orders.vue";
import Productos from "@/views/Productos.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/pedidos", name: "Pedidos", component: Orders },
    { path: "/productos", name: "Productos", component: Productos },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
