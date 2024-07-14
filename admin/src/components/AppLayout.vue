<script setup>
import Sidebar from "./Sidebar.vue";
import TopHeader from "./TopHeader.vue";
import { ref } from "vue";

const isSidebarOpen = ref(true);

const { title } = defineProps({
    title: String,
});

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
    <div class="flex min-h-screen bg-gray-200">
        <sidebar :class="{ '-ml-[200px]': !isSidebarOpen }" />
        <div class="flex-1">
            <top-header @toggle-sidebar="toggleSidebar" />
            <main class="p-6">
                <router-view />
            </main>
        </div>
    </div>
</template>
<style scoped></style>
