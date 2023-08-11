<template>
    <div class="resume-container">
        <div class="top-content">
            <div class="header">
                <div class="nha" v-show="title === 'Registros Acadêmicos'">
                    <img class="img" :src="registers" >
                </div>
                <div class="nha" v-show="title === 'Notas'">
                    <img class="img" :src="grades">
                </div>
                <div class="nha" v-show="title === 'Frequência'">
                    <img class="img" :src="attendance">
                </div>
                <div class="title"> {{ title }} </div>
            </div>
            <div class="resume">
                {{ resume }}
            </div>
        </div>
        <div class="line"></div>
        <div class="content-container">
            <div class="content">
                <div class="content" v-show="title === 'Registros Acadêmicos'">
                    <span>Não trouxe material para a aula </span>
                </div>
                <div class="content" v-show="title === 'Notas'">
                    <span>Última nota liberada <span class="result-note">{{ content.averageClass }}</span></span>
                </div>
                <div class="content" v-show="title === 'Frequência'">
                    <span>{{ content.freq }} Faltas <span class="result-freq">65% de presença</span></span>
                </div>
            </div>
            <div class="line-content"></div>
            <div class="date"> 11 de Agosto </div>
            <div class="content" v-show="title === 'Registros Acadêmicos'">
                <button class="btn"><span>Ver Desempenho</span></button>
            </div>
            <div class="content" v-show="title === 'Frequência'">
                <button class="btn"><span>Ver Desempenho</span></button>
            </div>
            <div class="content" v-show="title === 'Notas'">
                <button class="btn-freq"><span>Ver todos</span></button><button class="btn-note"><span>Revisar conteúdo</span></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import registers from '@/assets/registers.svg'
import grades from '@/assets/grades.svg'
import attendance from '@/assets/attendance.svg'

defineProps<{
    title: any,
    resume: any,
    content: any,

}>()

</script>

<style scoped>

.nha {
    height: 40px;
}
.resume-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 16px;
    margin: 1em 8vw 1em 8vw;
}

.top-content {
    display: flex;
    flex-direction: column;;
    justify-content: left;
    gap: 16px;
}

.header {
    display: flex;
    justify-content: left;
    flex-direction: row;
    gap: 4px;
}

img {
    width: 40px;
    height: 40px;
}
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.resume {
    display: flex;
    justify-content: left;
    text-align: left;
    color: var(--gray-90);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}


.line {
    background-color: #E8ECEF;
    height: 1px;
    width: 100%;
}

.btn {
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #D7DEE3;
    background: #FFF;
}
.btn-freq {
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
.btn-freq > span {
    color: #434E5B;
    text-align: center;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 16.8px */
}

.content-container {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.content {
    display: flex;
    justify-content: left;
    color: var(--gray-90);
    gap: 15px;
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
}

.content-result {
    display: flex;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
}
.date {
    display: flex;
    justify-content: left;
    overflow: hidden;
    color: #748494;
    text-overflow: ellipsis;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
}

.result {
    position: absolute;
    right: 80px;
}

.result-freq {
    position: absolute;
    right: 80px;
    color: #F0AF09;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}
.result-note {
    position: absolute;
    right: 80px;
    color: red;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

</style>