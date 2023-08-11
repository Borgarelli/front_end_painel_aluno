<template>
    <div v-for="img in imgs">
        <AcademicalRegisters :img_path="img" title="Registros Acadêmicos" subtitle="Olha, você têm um novo registro 😉" content="Não trouxe material para a aula">

        </AcademicalRegisters>
    </div>
</template>
<script setup lang="ts">
import AcademicalRegisters from './AcademicalRegisters.vue';
import registers from '@/assets/registers.png'
import grades from '@/assets/layers.png'
import attendance from '@/assets/menu.png'
import lecture from '@/assets/registers.png'

const imgs = [registers, grades, attendance, lecture]

</script>
<style>
</style>