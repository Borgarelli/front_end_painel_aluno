<template>
    <div class="topics">
        <div class="topics-content">
            {{  }}
            <span class="topics-title">{{ title }}</span>
            <div class="group" v-for="analytics in content['0']">
                <div v-show="analytics.name === 'Registros Acadêmicos'">
                    <img class="img" :src="registers" >
                </div>
                <div v-show="analytics.name === 'Notas'">
                    <img class="img" :src="grades">
                </div>
                <div v-show="analytics.name === 'Frequência'">
                    <img class="img" :src="attendance">
                </div>
                <div class="topics-texto" >
                    <span class="topics-subtitle">{{ analytics.name }}</span>
                    <span class="topics-text">{{ analytics.notification  ? analytics.notification.message : "Olha, você tem uma nova notificação" as any }}</span>
                </div>
            </div>
            <el-button type="primary" @click ="setSubject(title, content)"> Ver Detalhes </el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import registers from '../assets/registers.svg'
import grades from '../assets/grades.svg'
import attendance from '../assets/attendance.svg'
import { router } from "../router"
import { useRoute } from 'vue-router';
// import lecture from '../assets/lecture.svg'

defineProps<{
  title: string
  content?: any | undefined
}>()

const route = useRoute()

function setSubject(title: string, content: any) {
    router.push({name: 'selectedsubject', params: {'id': route.params._id, 'subject': title, 'content': content}})
}

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
.topics-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

}
.topics-title {
   overflow: hidden;
   color: #1D2B36;
   text-overflow: ellipsis;
   font-family: Nunito;
   font-size: 18px;
   font-style: normal;
   font-weight: 800;
   line-height: 100%;
}

.topics-subtitle {
    overflow: hidden;
    color: #434E5B;
    text-overflow: ellipsis;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
}

.topics-text {
    color: #232B34;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 16.8px */
}

.topics-texto {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.group {
 display: flex;
 flex-direction: row;
 text-align: left;
 gap: 10.6px;
}

.img {
    width: 30px;
    height: 30px;
}

.el-button {
    display: flex !important;
    width: 100% !important;
    height: 40px !important;
    padding: 0px 16px !important;
    justify-content: center!important;
    align-items: center !important;
    gap: 10px !important;

    border-radius: 4px !important;
    border: 1px solid var(--gray-40) !important;
    background: #FFF !important;

    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 120% !important;
    }

</style>