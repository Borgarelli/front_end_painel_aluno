<template>
    <div class="app">
        <AppBar/>
            <SelectedSubjected></SelectedSubjected>
    </div>
    </template>

    <script setup lang="ts">
    import AppBar  from '../components/AppBar.vue';
    import SelectedSubjected from '../components/SelectedSubjected.vue';
    </script>

    <style scoped>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }

    </style>