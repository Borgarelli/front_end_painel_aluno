<template>
<button class="user" @click="setUser">
    <PainelSection>
        <template v-slot:name>
            {{ user.name }}
        </template>
        <template v-slot:group>
            {{ user.group }}
        </template>
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
        group: string
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

</style>
