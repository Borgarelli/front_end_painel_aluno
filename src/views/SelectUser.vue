<template>
  <AppBar/>
  <div id="users" v-for="member in members">
    <UserButton :member=member></UserButton>
    <TheFooter/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import AppBar from '../components/AppBar.vue';
import TheFooter from '../components/TheFooter.vue';
import UserButton from '../components/userButton.vue';

const members = JSON.parse(localStorage.getItem('members') as string)

</script>
<style scoped>
</style>
../services/member