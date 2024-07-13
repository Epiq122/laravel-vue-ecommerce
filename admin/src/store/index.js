import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        test: 'This is a Test from Pinia'
    }),
    getters: {},
    actions: {}
})
