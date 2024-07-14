<script setup>
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";

const { title } = defineProps({
    title: String,
});
</script>

<template>
    <div class="flex min-h-screen bg-gray-200">
        <sidebar />
        <div class="flex-1">
            <top-header />
            <main class="p-6">
                <router-view />
            </main>
        </div>
    </div>
</template>
<style scoped></style>
