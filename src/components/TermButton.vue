<template>
    <div class="term-button"> {{ term }}</div>
</template>

<script setup lang="ts">

defineProps<{term:string}>()

</script>

<style scoped>

.term-button {
    display: flex;
    padding: 6.183px 8.372px 5.319px 10.6px;
    justify-content: center;
    align-items: center;

    color: var(--gray-80);
    border-radius: 17.668px;
    border: 0.883px solid var(--gray-30);
    background: var(--white, #FFF);
}

</style>