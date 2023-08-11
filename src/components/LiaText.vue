<template>
    <div class="register-container">
        <div class="header">
            <img src="@/assets/user_profile.svg"/>
            <div class="text">
                <div class="title"> Lia </div>
                <div class="subtitle"> Assistente Pedagógica Virtual</div>
            </div>
        </div>
            <div class="content" v-for="phrase in phrases">
                {{ phrase }}
                <bl></bl>
            </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const member = JSON.parse(localStorage.getItem('currentMember') as any)

const phrases = ref([
    `Olá Responsável do ${member.name} :)`,
    'Gostaria de compartilhar um resumo do desempenho da aluna até esse momento do bimestre.',
    'Tivemos 1 registro de esquecimento de material e uma taxa de comparecimento de apenas 65%. Além disso, o seu desempenho na avaliação do período foi de 56% do total.',
    'Sabemos que esses resultados podem sempre serem melhorados. Por isso, acompanhe os dados detalhadamente a seguir.'
])


</script>

<style scoped>
.register-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 16px;
    margin: 1em 8vw 1em 8vw;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 8px;
}

img {
    width: 40px;
    height: 40px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: left;
}

.title {
    display: flex;
    align-items: center;
    margin: 0;
}

.content {
    display: flex;
    justify-content: left;
    color: var(--selected);
    gap: 8px;
    text-align: left;
}


</style>