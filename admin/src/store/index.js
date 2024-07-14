import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: {
            token: null,
            data: {},
        },
    }),
    getters: {},
    actions: {},
});
