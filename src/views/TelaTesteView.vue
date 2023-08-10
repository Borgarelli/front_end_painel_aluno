<template>
    <div class="app">
        <AppBar/>
        <CompButtons/>
        <TheFooter/>
    </div>
    </template>
    
    <script setup lang="ts">
import AppBar  from '../components/AppBar.vue';
import CompButtons from '../components/CompButtons.vue';
  

    </script>
    
    <style scoped>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    
    </style>