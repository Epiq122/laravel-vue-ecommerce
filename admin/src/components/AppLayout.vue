<script setup>
import Sidebar from "./Sidebar.vue";

const { title } = defineProps({
    title: String,
});
</script>

<template>
    <div class="flex min-h-screen">
        <sidebar />
        <div class="flex-1">
            <header class="h-8 shadow bg-white">Header</header>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<style scoped></style>
