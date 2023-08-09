<template>
    <div class="app">
        <div>
            <h1></h1>
            <PainelSection label="kcte" sublabel="pqp"> </PainelSection>
        </div>
    </div>
    </template>

    <script setup lang="ts">
    import PainelSection from  '../components/PainelSection.vue'
    console.log('aqui')
    </script>

    <style>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    </style>