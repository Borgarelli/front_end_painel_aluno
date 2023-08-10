<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <TheFooter/>
</template>
 <main class="main1">
        <div class="header-main1">
            <div class="header-img-main1">
                <img src="img/Component 1.png" alt="">
            </div>
            <div class="text-header-main1">
                <h3>LIA</h3>
                <p class="assistent">Assistente pedagógica virtual</p>
            </div> 
        </div>
        <div class="text-main1">
            <p>Olá responsável do Paulo :&#41;</p>
            <p>Gostaria de compartilhar um resumo do desempenho do seu filho até esse momento do bimestre.</p>
            <p>Tivemos 1 registro de esquecimento de material e um comparecimento de apenas 65%. Além disso, o seu desempenho na avaliação do período foi de 56% do total.</p>
            <p>Sabemos que esses resultados podem sempre serem melhorados. Por isso, acompanhe os dados detalhadamente a seguir.</p>
        </div>
    </main>

main{
    width: 90%;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin: 0 5% 0 5%;
    border-radius: 17px;
    margin-bottom: 25px;
}

.main1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 330px;
}

.header-main1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px;
    width: 100%;
    margin-top: -15px;
}


.text-header-main1{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 12px;  
}

h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
}

.text-header-main1 > p{
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    color: var(--gray-70, #748494);
}

.text-main1{
    margin-top: 10px;
    width: 90%;
    font-size: 15px;
    color: var(--secondary-lead, #434E5B);
    font-weight: 600;
    text-align: justify; 
}
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TheFooter
}
}
</script>
