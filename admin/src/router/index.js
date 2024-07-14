import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import Login from "../views/LoginView.vue";
import Products from "../views/ProductsView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ResetPasswordView from "../views/ResetPasswordView.vue";
import AppLayout from "../components/AppLayout.vue";
import { useUserStore } from "../store/index.js";
import NotFound from "../components/NotFound.vue";
// import store from "../store";

const routes = [
    {
        path: "/app",
        name: "app",
        component: AppLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: Dashboard,
            },
            {
                path: "products",
                name: "app.products",
                component: Products,
            },
            {
                path: "users",
                name: "app.users",
                component: Dashboard,
            },
            {
                path: "reports",
                name: "app.reports",
                component: Dashboard,
            },
        ],
    },

    {
        path: "/login",
        name: "login",
        meta: {
            requiresGuest: true,
        },
        component: Login,
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        meta: {
            requiresGuest: true,
        },
        component: ForgotPasswordView,
    },
    {
        path: "/reset-password/:token",
        name: "resetPassword",
        meta: {
            requiresGuest: true,
        },
        component: ResetPasswordView,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const userStore = useUserStore(); // Correctly get the store instance
    if (to.meta.requiresAuth && !userStore.user.token) {
        next({ name: "login" });
    } else if (to.meta.requiresGuest && userStore.user.token) {
        next({ name: "app.dashboard" });
    } else {
        next();
    }
});

export default router;
