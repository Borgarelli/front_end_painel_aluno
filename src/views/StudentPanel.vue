<template>
<div class="app">
    <AppBar/>
    <TermsBar :terms="termsNames"/>
    <TheFooter/>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getTerms, getTermsName } from '../services/studentPanel.ts'
import AppBar  from '../components/AppBar.vue';
import TermsBar from '../components/TermsBar.vue';

const termsNames = ref(getTermsName())
const terms = getTerms()
console.log(terms)

</script>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

</style>