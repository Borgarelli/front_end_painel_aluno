<template>
  <div class="footer">
    <div class="footer-content">
      <img class="layers" alt="layers" src="../assets/Camada_1.png">
      <div class="footer-text">
        <h2 class="footer-title">Joãozinho</h2>
        <p class="footer-description">1º turma B</p>
      </div>
      <img class="exit" alt="exit" src="../assets/portal-close.png">
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white; 
  padding: 12px 0;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  border-radius: 12px 12px 0px 0px;
  border: 1px solid #E8ECEF;
  background: #FFF;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 360px;
  margin: 0 auto; /* Centralize o conteúdo horizontalmente */
  padding: 0 12px;
}

.footer-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 16px;
}

.footer-title {
  color: #434E5B;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
}

.footer-description {
  color: #748494;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

.layers,
.exit {
  width: 40px;
  height: 40px;
}
</style>