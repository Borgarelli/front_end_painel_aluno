<template>
  <AppBar/>
  <div id="users" v-for="user in users">
    <UserButton :user=user></UserButton>
    <TheFooter :user="user"/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppBar from '../components/AppBar.vue';
import TheFooter from '../components/TheFooter.vue';
import UserButton from '../components/userButton.vue';
import { getUsers } from '../services/user';


const users = ref(getUsers())

onMounted( ()=> {
  users.value
})
</script>
<style scoped>
</style>
