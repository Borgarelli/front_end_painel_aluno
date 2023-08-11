<template>
     <div class="main1">
        <div class="group">
                <img class="img" src="../assets/anonimous.png" alt="anonimos">
            <div class="text-header-main1">
                <span class="title">LIA</span>
                <p class="subtitle">Assistente pedagógica virtual</p>
            </div> 
        </div>
        <div class="body">
          <span>
            Olá responsável do Paulo :&#41; <br> <br>
            Gostaria de compartilhar um resumo do desempenho da aluna até esse momento do bimestre. <br> <br>
            Tivemos 1 registro de esquecimento de material e uma taxa de comparecimento de apenas 65%. Além disso, o seu desempenho na avaliação do período foi de 56% do total. <br> <br>
            Sabemos que esses resultados podem sempre serem melhorados. Por isso, acompanhe os dados detalhadamente a seguir.
          </span>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.main1 {
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  border-radius: .5em;
  padding: 1em;
  margin: 1em 8vw 1em 8vw;
}

.group {
  display: flex;
  flex-direction: row;
  text-align: left;
  gap: 10.6px;
}

.title {
    overflow: hidden;
    color: #1D2B36;
    text-overflow: ellipsis;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    }

.subtitle {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  color: var(--sublabel);
  margin-bottom: 2em;
}

.body {
  display: flex;
  text-align: justify;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.body > span {
    color: #434E5B;
    font-family: Nunito;
    font-size: 13px;
    font-style: normal;
    font-weight: 450;
    line-height: 120%;
}

.img {
    width: 30px;
    height: 30px;  
}
</style>