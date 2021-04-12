import { createWebHistory, createRouter } from "vue-router";
import Home from "../page/Home.vue";
import Walk from "../page/Walk.vue";

const routes = [
    {
        path: "/walk",
        name: "Walk",
        component: Walk,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;