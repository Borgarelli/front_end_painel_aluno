<template>
<div class="app">
    <AppBar/>

    <TermsBar :terms="terms"/>
    <TheFooter/>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppBar  from '../components/AppBar.vue';
import TermsBar from '../components/TermsBar.vue';
import TheFooter from '../components/TheFooter.vue';

const terms = ref([
    // '1º Bimestre',
    // '2º Bimestre',
    // '3º Bimestre',
    // '4º Bimestre'
    {
        term: '1º Semestre',
        order: "first"
    },
    {
        term: '2º Semestre',
        order: "second"
    },
])

onMounted(()=> {
    terms.value
})
</script>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

</style>