<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();

const search = computed({
    get() {
        return route.query.search ?? "";
    },
    set(search) {
        router.replace({ query: { search } });
    },
});
</script>

<template>
    <h1>Dashboard Page</h1>
</template>

<style scoped></style>
