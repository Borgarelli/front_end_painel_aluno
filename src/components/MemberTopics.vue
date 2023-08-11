<template>
    <div class="topics">
        <Topics :img_path="img" title="História" subtitle="Registros Acadêmicos" content="Olha, você tem um novo registro 😉">
        </Topics>
        <br>
        <Topics :img_path="img" title="Matematica" subtitle="Notas" content="Que ótimo, sua nota está acima da média 🙂">
        </Topics>
    </div>
</template>
<script setup lang="ts">
import Topics from './Topics.vue'
import imagem from '../assets/registers.png'

const img = imagem
</script>
<style scoped>

.topics {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: .5em;
    padding: 1em;
    margin: 1em 8vw 1em 8vw;
}
</style>