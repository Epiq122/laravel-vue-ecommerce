<script setup>
import {
    HomeIcon,
    UserIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
    <div
        class="w-[200px] bg-indigo-900 text-gray-300 py-4 px-2 transition-all duration-300"
    >
        <router-link
            :to="{ name: 'app.dashboard' }"
            class="flex items-center hover:bg-black/20 p-2 rounded-md"
        >
            <span class="mr-2"><HomeIcon class="w-5" /></span>
            <span class="text-sm font-light">Dashboard</span>
        </router-link>
        <router-link
            :to="{ name: 'app.products' }"
            class="flex items-center hover:bg-black/20 p-2 rounded-md"
        >
            <span class="mr-2"><CurrencyDollarIcon class="w-5" /></span>
            <span class="text-sm font-light">Products</span>
        </router-link>
        <router-link
            :to="{ name: 'app.users' }"
            class="flex items-center hover:bg-black/20 p-2 rounded-md"
        >
            <span class="mr-2"><UserIcon class="w-5" /></span>
            <span class="text-sm font-light">Users</span>
        </router-link>
        <router-link
            :to="{ name: 'app.reports' }"
            class="flex items-center hover:bg-black/20 p-2 rounded-md"
        >
            <span class="mr-2"><ChartBarIcon class="w-5" /></span>
            <span class="text-sm font-light">Reports</span>
        </router-link>
    </div>
</template>

<style scoped></style>
