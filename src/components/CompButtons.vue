<template>
    <div>
        <AcademicalRegisters :img_path="image" title="Registros Acadêmicos" subtitle="Olha, você têm um novo registro 😉" content="Não trouxe material para a aula" data="12 de julho">
            <button class="btn"><span>Ver todos</span></button>
        </AcademicalRegisters>

        <AcademicalRegisters :img_path="image1" title="Notas" subtitle="Poxa, sua nota está abaixo da média 🙁" content="Última nota liberada" data="12 de julho" note="4.6">
            <button class="btn"><span>Ver todos</span></button><button class="btn-note"><span>Revisar conteúdo</span></button>
        </AcademicalRegisters>

    </div>
</template>
<script setup lang="ts">
import AcademicalRegisters from './AcademicalRegisters.vue';
import image from '@/assets/registers.png'
import image1 from '@/assets/star.png'

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
.btn-note {
    margin-top: 10px;
    display: flex;
    width: 50%;
    height: 40px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #00B8AD;
    background: #00B8AD;
}

.btn-note span {
    color: #FFF;
    text-align: center;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 16.8px */
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