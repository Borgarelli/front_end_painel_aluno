<template>
    <div class="topics-content">
        <span class="topics-title">{{ title }}</span>
        <div class="group">
            <img class="img" :src="img_path" alt="registros">
            <div class="topics-texto" >
                <span class="topics-subtitle">{{ subtitle }}</span>
                <span class="topics-text">{{ content }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string | undefined
  subtitle?:string | undefined
  content?: string | undefined
  img_path?: string | undefined
}>()
</script>
<style scoped>
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
</style>