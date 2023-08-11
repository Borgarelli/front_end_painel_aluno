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

</style>
