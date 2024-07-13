<script setup>
import { ref } from "vue";
import { useMainStore } from "../store/index.js";

defineProps({
    msg: String,
});

const mainStore = useMainStore();
</script>

<template>
    <h2>{{ mainStore.test }}</h2>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
