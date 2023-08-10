<template>
  <AppBar/>
  <div id="users" v-for="user in users">
    <UserButton :user=user></UserButton>
    <TheFooter/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import UserButton from '../components/userButton.vue';

const users = ref([
    {
      _id: "1",
      name: "Joãozinho",
      group: "7 ano - Turma B",
      img_path: "../assets/layers.png"
    },
    {
      _id: "2",
      name: "Joana",
      group: "1 ano - Turma B",
      img_path: "../assets/layers.png"
    }
  ])

onMounted( ()=> {
  users.value
})
</script>
<style scoped>
#users{
  margin-top: 10px;
}
</style>
