<template>
<div class="app">
    <TermNavBar :terms="terms"/>
    <TheFooter/>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TermNavBar from '../components/TermNavBar.vue';

const terms = ref([
    // '1º Bimestre',
    // '2º Bimestre',
    // '3º Bimestre',
    // '4º Bimestre'
    '1º Semestre',
    '2º Semestre'
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