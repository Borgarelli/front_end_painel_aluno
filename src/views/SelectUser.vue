<template>
  <AppBar/>
  <div id="users" v-for="member in members">
    <UserButton :user=member></UserButton>
    <TheFooter/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppBar from '../components/AppBar.vue';
import TheFooter from '../components/TheFooter.vue';
import UserButton from '../components/UserButton.vue';
import { getMembers } from '../services/members'

const members = ref(getMembers())

onMounted( ()=> {
  members.value
})
</script>
<style scoped>
</style>
../services/member