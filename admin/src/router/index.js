import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import Login from "../views/LoginView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import ResetPasswordView from "../views/ResetPasswordView.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
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
