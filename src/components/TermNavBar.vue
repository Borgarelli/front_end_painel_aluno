<template>
    <div class="terms">
        <div v-for="term in terms">
        <TermButton :name="term"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import TermButton from './TermButton.vue';

defineProps<{
    terms: string[]
}>()

</script>

<style scoped>
.terms {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    top: 64px;
    gap: 8px;
}

</style>