import { createWebHistory, createRouter } from "vue-router";
import Home from "../page/Home.vue";
import Walk from "../page/Walk.vue";
import Shop from "../page/Shop.vue";
import Challenge from "../page/Challenge.vue";

const routes = [
    {
        path: "/walk",
        name: "Walk",
        component: Walk,
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    },
    {
        path: "/challenge",
        name: "Challenge",
        component: Challenge,
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