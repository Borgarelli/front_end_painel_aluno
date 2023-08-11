<template>
  <AppBar/>
  <div id="users" v-for="member in members">
    <MemberButton :member=member></MemberButton>
    <TheFooter/>
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import AppBar from '../components/AppBar.vue';
import TheFooter from '../components/TheFooter.vue';
import MemberButton from '../components/MemberButton.vue';

const members = JSON.parse(localStorage.getItem('members') as string)

</script>
<style scoped>
</style>