<template>
  <div id="users" v-for="user in users">
    <userButton :user=user></userButton>
    <TheFooter/>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import userButton from '../components/userButton.vue';

const users = ref([
    {
      _id: "123",
      name: "Joãozinho",
      group: "7 ano - Turma B"
    },
    {
      _id: "222",
      name: "Joana",
      group: "1 ano - Turma B"
    }
  ])

onMounted( ()=> {
  users.value
})
</script>
<style scoped>
</style>
