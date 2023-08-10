<template>
<div class="app">
    <TermNavBar :terms="terms"/>
    <TheFooter/>
</div>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"  />
    <title>Painel do Aluno</title>
</head>
<body>
    <header>
        <div class="cabecalho">
             <h1>Ana Maria</h1>
            <i class="fa-solid fa-bars"></i> 
        </div>        
    </header>

    <div class="materia">
        <h2>&lt;Português</h2>
    </div>

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

    <main class="main2">
        <div class="header-main2">
            <div class="header-img-main2">
                <img src="img/clipboard.png" alt="">
            </div>
            <div class="text-header-main2">
                <h3>Registros Acadêmicos</h3>
             <div class="subtext2">
                <h4>Olha, você tem um novo registro 😉</h4>
            </div>
            </div>
        </div>
        <div class="linha"></div>
            <div class="title-main2">
                <h4>Não trouxe material para a aula</h4>
                <p>12 de Julho</p>
            </div>
            <button class="btn">Ver todos</button>
    </main>

    <main class="main3">
        <div class="header-main3">
            <div class="header-img-main3">
                <img src="img/star.png" alt="">
            </div>
            <div class="text-header-main3">
                <h3>Notas</h3>
                <div class="subtext3">
                    <h4>Poxa, sua nota está abaixo da média 🙁</h4>
                </div>
            </div>
        </div>
        <div class="linha"></div>
        <div class="title-main3">
            <h4>Última nota liberada ......................................<span style="color: #ED6B4F";>4.6</span></h4>
            <p>12 de Julho</p>
        </div>
        <div class="buttons3">
            <button class="btn3">Ver detalhes</button>
            <button class="btn4">Revisar conteúdo</button>
        </div>
    </main>

    <main class="main4">
        <div class="header-main4">
            <div class="header-img-main4">
                <img src="img/check-circle.png" alt="">
            </div>
            <div class="text-header-main4">
                <h3>Frequência</h3>
                <div class="subtext4"><h4>Atenção, você está quase atingindo o limite de faltas 🫤</h4></div>
            </div>     
        </div>
        <div class="linha"></div>
        <div class="title-main-4">
            <h4>8 faltas ..............................<span style="color: #F0AF09;">65% de presença</span></h4>
        </div>
        <button class="btn">Ver detalhes</button>
    </main>

    <main class="main5">
        <div class="header-main5">
            <div class="header-img-main5">
                <img src="img/vector3.png" alt="">
            </div>
            <div class="text-header-main5">
                <h3>Conteúdo Dado</h3>
                <div class="subtext5"><h4>3 novos conteúdos foram adicionados 😊</h4></div>
            </div>
        </div>
        <div class="linha"></div>
        <div class="title-main5">
            <h4>Gramática ...........................................08 de março</h4>
            <h4>Verbos..................................................10 de março</h4>
            <h4>Conjugações.......................................10 de março</h4>
        </div>
        <button class="btn">Ver todos</button>
    </main>

    <div class="btn-marcar">
        <button>Marcar reunião com Professor</button>
    </div>
    
</body>
</html>


@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

*{
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--colors-neutral-gray-10, #F4F6F8);
}

header{
    border-radius: 0 0 12px 12px;
}

.cabecalho{
    width: 100%;
    height: 65px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
}

.cabecalho > i{
    color: var(--secondary-lead, #434E5B);
    margin: 20px;
    font-size: 23px;
}

h1{
    font-size: 19px;
    font-weight: 700;
    color: var(--colors-brand-lead, #232B34);
    margin-left: 23px;
    margin-top: 18px;
}

h2{
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    margin-left: 13px;
    margin-bottom: 25px;
}

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

.main2{
    display: flex;
    flex-direction: column;
    height: 268px;
}

.header-main2{
    display: flex;
    flex-direction: row;
    margin: 22px 15px 0 -15px;
}

.header-img-main2{
    height: 30px;
    width: 30px;
    background: var(--primary-pink-light, #FEE4E4);
    margin-left: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img-main2 > img{
    height: 18px;
    width: 18px;
}

.text-header-main2{
    margin-left: 8px;
}

.text-header-main2 > h3{
    font-size: 21px;
    font-style: normal;
    font-weight: 800;
    color: var(--gray-90, #1D2B36);
}

.subtext2{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 15px 0 20px -36px;
}

.linha{
    background-color: #E8ECEF;
    height: 1px;
    width: 90%;
}

.title-main2{
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 -105px;
}

h4{
    font-size: 16.5px;
    color: var(--gray-90, #1D2B36);
    font-weight: 700;
}

.title-main2 > p{
    color: var(--gray-70, #748494);
    font-size: 14px;
}

.btn{
    width: 90%;
    padding: 10px;
    border: 1.7px solid var(--colors-neutral-gray-40, #D7DEE3);
    border-radius: 5px;
    background-color: #fff;
    color: var(--colors-brand-lead-light, #434E5B);
    margin-top: 25px;
    font-size: 16px;
    font-weight: 700;
}

.main3{
    display: flex;
    flex-direction: column;
    height: 268px;
}

.header-main3{
    display: flex;
    flex-direction: row;
    margin: 22px 45px 0 55px;
}

.header-img-main3{
    height: 30px;
    width: 30px;
    background: var(--link-link-light, #E6F1FE);
    margin-left: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img-main3 > img{
    height: 16px;
    width: 16px;
}

.text-header-main3{
    margin-left: 8px;
}

.subtext3{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 15px 0 20px -36px;
}

.linha{
    background-color: #E8ECEF;
    height: 1px;
    width: 90%;
}

.title-main3{
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 -10px;
}

.title-main3 > p {
    color: var(--gray-70, #748494);
    font-size: 14px;
}


.btn3{
    padding: 10px 27px;
    border: 1.7px solid var(--colors-neutral-gray-40, #D7DEE3);
    border-radius: 5px;
    background-color: #fff;
    color: var(--colors-brand-lead-light, #434E5B);
    margin-top: 25px;
    font-size: 16px;
    font-weight: 700;
    margin-right: 10px;
}

.btn4{
    padding: 10px;
    border: 1.7px solid var(--colors-neutral-gray-40, #D7DEE3);
    border-radius: 5px;
    background: var(--primary-cyan, #00B8AD);
    color: #fff;
    margin-top: 25px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
}

.main4{
    display: flex;
    flex-direction: column;
    height: 270px;
}

.header-main4{
    display: flex;
    flex-direction: row;
    margin: 22px 20px 0 -15px;
}

.header-img-main4{
    height: 30px;
    width: 30px;
    background: var(--success-success-light, #EAF8F0);
    margin-left: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img-main4 > img{
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
}

.text-header-main4 > h3{
    margin-left: 8px;
}

.subtext4{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 12px 10px 20px -15px;
}

.title-main-4{
    margin: 25px 10px 5px -13px;
}

.main5{
    display: flex;
    flex-direction: column;
    height: 290px;
}

.header-main5{
    display: flex;
    flex-direction: row;
    margin: 22px 20px 0 -20px;
}

.header-img-main5{
    height: 30px;
    width: 30px;
    background: var(--secondary-purple-light, #EEEEFB);
    margin-left: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-img-main5 > img{
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
}

.text-header-main5 > h3{
    margin-left: 8px;
}

.subtext5{
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin: 20px 10px 20px -27px;
}

.title-main5{
    margin-top: 20px;
}

.btn-marcar > button{
    width: 90%;
    margin-left: 20px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--primary-cyan, #00B8AD);
    background: var(--primary-cyan, #00B8AD);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}

    
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
