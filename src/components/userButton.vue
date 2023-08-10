<template>
<button class="user" @click="setUser">
    <PainelSection :label="user.name" :sublabel="user.group " img_path="../assets/layers.png">
        {{ user.name }}
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
    width: 100%;
    height: 100%;
}

</style>
