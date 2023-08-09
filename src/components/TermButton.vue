<template>
    <button>
        {{ name }}
    </button>
</template>

<script setup lang="ts">

defineProps<{ name: string }>()

</script>

<style scoped>

button {
    height: 22px;
    width: 62px;
    border-radius: 20px;
    border: 1px solid var(--gray-20);
    background: white;

    color: var(--secondary-lead);
    font-family: Nunito;
    font-size: 10px
}

button:focus {
    background-color: var(--gray-80);
    color: white;
}
</style>