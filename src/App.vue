<script setup lang="ts">
import PainelSection from  './components/PainelSection.vue'
</script>

<template>
  <div class="app">

    <PainelSection label="teste" sublabel="assunto do testes">
      <router-link to="/highlights">Adicionar a tela de seleção de alunos aqui</router-link>
    </PainelSection>
    <RouterView/>
  </div>
</template>

<style scoped>

.app {
  background-color: #E8ECEF;
  height: 100vh;
  width: 100vw;
}

</style>
