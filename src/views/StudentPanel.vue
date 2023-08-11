<template>
<div class="app">
    <AppBar/>
    <TermsBar :terms="termsNames"/>
    <TheFooter/>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getTermsName, getStatusPerSubject } from '../services/studentPanel.ts'
import AppBar  from '../components/AppBar.vue';
import TermsBar from '../components/TermsBar.vue';

const termsNames = ref(getTermsName())
console.log(getStatusPerSubject())

</script>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

</style>