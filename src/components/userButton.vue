<template>
<button class="user" @click="setUser">
    <PainelSection :label="user.name" :sublabel="user.group " img_path="../assets/layers.png">
        <PainelSection>
            <button class="btn"><span class="msg">Ver Desempenho</span></button>
        </PainelSection>

    </PainelSection>
</button>

</template>

<script setup lang="ts">
import { router } from '../router';
import PainelSection from './PainelSection.vue';



const props = defineProps<{
    user: {
        _id: string,
        name: string,
        group: string,
        img_path?: string
    }
}>()

function setUser() {
    router.push(`/studentPainel/${props.user._id}`)
}

</script>

<style scoped>

.user {
    width: 358px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #E8ECEF;
    background: #FFF;
}

.btn {
    display: flex;
    width: 269px;
    height: 23px;
    padding: 6px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #E8ECEF;
    background: #FFF;
    margin-top: 3em;
}

.msg {
    color: #405261;
    text-align: center;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 16.8px */
}
</style>
