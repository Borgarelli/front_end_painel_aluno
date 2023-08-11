<template>
    <div class="select-subject-container">
        <div class="element button">
            <el-button type="primary" :icon="Back" @click="rollBack()"> {{ subject }} </el-button>
        </div>
        <LiaText></LiaText>
        <div v-for="analytics in content[0]">
            <Resume :title="analytics.name" :content="'asas'" :resume="analytics.notification  ? analytics.notification.message : 'Olha, você tem uma nova notificação'"></Resume>
        </div>
    </div>
    </template>

<script setup lang="ts">
import { Back } from '@element-plus/icons-vue'
import LiaText from './LiaText.vue';
import Resume from './Resume.vue';
import { router } from "../router"
import { useRoute } from 'vue-router';

const content = JSON.parse(localStorage.getItem('contentSubject') as string)

const route = useRoute()

const subject = route.params.subject

function rollBack() {
    router.push({name: 'studentpainel', params: {'id': route.params._id}})
}

</script>

<style>
    .select-subject-container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    .el-button {
        display: flex !important;
        justify-content: left !important;
        background-color: transparent !important;
        width: 8% !important;
        padding-top: 24px !important;
        padding-bottom: 24px !important ;
        color: var(--selected) !important;
        border: transparent !important;
        border-color: transparent !important;
        font-size: 16px !important;
        font-style: normal !important;
        font-weight: 700 !important;
    }
</style>