<template>
    <div id="bimestres">
        <button class="button"><p>1º Bimestre</p></button>
        <button class="button"><p>2º Bimestre</p></button>
        <button class="button"><p>3º Bimestre</p></button>
        <button class="button"><p>4º Bimestre</p></button>
    </div>
    <TheFooter/>
</template>
<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue';

</script>
<style scoped>
#bimestres {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
}
.button {
    display: flex;
    padding: 4px 4px 4px 5px;
    justify-content: center;
    align-items: center;
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