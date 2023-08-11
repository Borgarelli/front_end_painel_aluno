<template>
    <div class="app">
        <div>
            <h1></h1>
            <PainelSection label="kcte" sublabel="pqp"> </PainelSection>
            <TermsBar/>
        </div>
    </div>
    </template>

<script setup lang="ts">
import { onMounted } from 'vue';
import PainelSection from  '../components/PainelSection.vue'

    onMounted(() => {

    })
</script>

<style>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
</style>