<template>
    <div class="topics">
        <div class="topics-content">
            <span class="topics-title">História</span>
            <div class="group">
               <img class="img" src="../assets/registers.png" alt="registros">
                <div class="topics-text">
                    <span class="topics-subtitle">Registros Acadêmicos</span>
                </div>
            </div>
       </div>
    </div>
</template>
<script setup lang="ts">
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

.topics {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
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

.group {
 display: flex;
 flex-direction: row;
 text-align: left;
 gap: 10.6px;
}
</style>