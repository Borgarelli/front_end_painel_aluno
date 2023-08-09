<template>
<div class="app">
    <div class="bimestres">
            <button class="button"><p>1º Bimestre</p></button>
            <button class="button"><p>2º Bimestre</p></button>
            <button class="button"><p>3º Bimestre</p></button>
            <button class="button"><p>4º Bimestre</p></button>
    </div>
    <h4>Selecione a disciplina</h4>
    <Slider/>
    <TheFooter/>
</div>
</template>

<script setup lang="ts">
import Slider from '../components/Slider.vue';
import TheFooter from '../components/TheFooter.vue';

console.log('aqui')
</script>

<style>
.app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

.bimestre {
    flex-direction: row;
}

.button {
    padding: 4px 4px 4px 5px;
    border-radius: 19.511px;
    border: 0.976px solid var(--gray-20, #EEF1F5);
    background: var(--white, #FFF);
}

p{
    color: var(--secondary-lead, #434E5B);
    font-family: Nunito;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 14px */
}
</style>