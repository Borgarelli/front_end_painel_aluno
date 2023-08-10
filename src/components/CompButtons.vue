<template>
    <div>
        <AcademicalRegisters :img_path="image" title="Registros Acadêmicos" subtitle="Olha, você têm um novo registro 😉" content="Não trouxe material para a aula">
            <button class="btn"><span>Ver todos</span></button>
        </AcademicalRegisters>
    </div>
</template>
<script setup lang="ts">
import AcademicalRegisters from './AcademicalRegisters.vue';
import image from '@/assets/layers.png'

</script>
<style scoped>
.btn {
    margin-top: 10px;
    display: flex;
    width: 50%;
    height: 40px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #D7DEE3;
    background: #FFF;
}

.btn > span {
    color: #434E5B;
    text-align: center;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 16.8px */
}
</style>