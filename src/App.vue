<script setup lang="ts">
import PainelSection from  './components/PainelSection.vue'
</script>

<template>
  <div id="app">

    <PainelSection label="teste" sublabel="assunto do testes">
      <router-link to="/highlights">Adicionar a tela de seleção de alunos aqui</router-link>
    </PainelSection>
    <RouterView/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #E8ECEF;
}

</style>
