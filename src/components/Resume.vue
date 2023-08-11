<template>
    <div class="resume-container">
        <div class="top-content">
            <div class="header">
                <img src="@/assets/user_profile.svg"/>
                <div class="title"> {{ title }} </div>
            </div>
            <div class="resume">
                {{ resume }}
            </div>
        </div>
        <div class="line"></div>
        <div class="content-container">
            <div class="content">
                {{ content }}
            </div>
            <div class="date"> 11 de Agosto </div>
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: any,
    resume: any,
    content: any,

}>()

</script>

<style scoped>
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
    justify-content: left;
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
.content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.content {
    display: flex;
    justify-content: left;
    color: var(--gray-90);
    gap: 8px;
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
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


</style>