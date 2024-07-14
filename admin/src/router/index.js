import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import Login from "../views/LoginView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ResetPasswordView from "../views/ResetPasswordView.vue";
import AppLayout from "../components/AppLayout.vue";

const routes = [
    {
        path: "/app",
        name: "app",
        component: AppLayout,
        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: Dashboard,
            },
            {
                path: "products",
                name: "app.products",
                component: Dashboard,
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
        component: Login,
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        component: ForgotPasswordView,
    },
    {
        path: "/reset-password/:token",
        name: "resetPassword",
        component: ResetPasswordView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
