<template>
    <div class="app">
        <AppBar/>
        <MemberTopics/>
        <TheFooter/>
    </div>
</template>
    
    <script setup lang="ts">
import AppBar  from '../components/AppBar.vue';
import MemberTopics from '../components/MemberTopics.vue';

    </script>
    
    <style scoped>
    .app {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    
    </style>