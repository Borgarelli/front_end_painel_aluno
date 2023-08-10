<template>
    <div class="main1">
       <div class="group">
               <img class="img" src="{{img_path}}" alt="registros">
           <div class="text-header-main1">
               <span class="title">{{ title }}</span>
           </div> 
       </div>
       <div class="subtitle"><span class="subtitle-content">{{subtitle}}</span></div>
       <div class="linha"/>
       <div class="subtitle">
        <span class="subtitle-content">
            {{ content }}
        </span>
        <span class="date">12 de julho</span>
       </div>
       <div class="body">
        <button class="btn"><span>Ver todos</span></button>
       </div>
   </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string 
  subtitle:string 
  content: string 
  img_path: string
}>()
</script>

<style scoped>
.main1 {
 display: flex;
 flex-direction: column;
 background-color: #FFF;
 border-radius: .5em;
 padding: 1em;
 margin: 1em 8vw 1em 8vw;
}

.group {
 display: flex;
 flex-direction: row;
 text-align: left;
 gap: 10.6px;
}

.title {
   overflow: hidden;
   color: #1D2B36;
   text-overflow: ellipsis;
   font-family: Nunito;
   font-size: 18px;
   font-style: normal;
   font-weight: 800;
   line-height: 100%;
   }

.subtitle {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.subtitle-content {
    color: #1D2B36;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 10px; /* 16.8px */
}


.linha {
    background-color: #E8ECEF;
    height: 1px;
    width: 90%;
}

.date {
    overflow: hidden;
    color: #748494;
    text-overflow: ellipsis;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
}

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
.img {
   width: 30px;
   height: 30px;  
}
</style>