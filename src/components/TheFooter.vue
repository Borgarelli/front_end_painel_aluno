<template>
  <el-footer class="footer">
    <div class="footer-content">
      <img class="layers" alt="layers" src="@/assets/layers.png">
      <div class="footer-text">
        <h2 class="footer-title">{{ nomeAluno }}</h2>
        <p class="footer-description">{{ descricaoAluno }}</p>
      </div>
      <img class="exit" alt="exit" src="@/assets/portal-close.png">
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'FooterElement',
  props: {
    nomeAluno: {
      type: String,
      default: 'Kauã Borgarelli'
    },
    descricaoAluno: {
      type: String,
      default: 'Nome do aluno'
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white; /* Define o fundo como transparente */
  padding: 12px 0;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ajuste a ordem de empilhamento conforme necessário */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 360px;
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
  color: var(--secondary-lead, #434E5B);
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
}

.footer-description {
  color: var(--gray-70, #748494);
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
