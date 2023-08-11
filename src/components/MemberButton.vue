<template>
<div class="user" @click="setUser">
    <PainelSection :label="member.name" :sublabel="member.group " :img_path="img_path">
    </PainelSection>
</div>
</template>

<script setup lang="ts">
import { router } from '../router';
import PainelSection from './PainelSection.vue';


const props = defineProps<{
    member: {
        _id: string,
        name: string,
        group: string,
    },
    img_path?: string
}>()

function setUser() {
    localStorage.setItem('currentMember', JSON.stringify(props.member))

    router.push(`/studentPainel/${props.member._id}`)

}

</script>

<style scoped>

.user {
    width: 100%;
    height: 100%;
}

.btn {
    display: flex;
    width: 50%;
    height: 23px;
    padding: 6px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #E8ECEF;
    background: #FFF;
}

.msg{
    color: #405261;
    text-align: center;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
}
</style>
