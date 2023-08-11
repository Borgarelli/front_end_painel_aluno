<script setup lang="ts">
import { getMembers } from './services/members';

const members = getMembers()
const studentPanel = ""

localStorage.setItem('members', JSON.stringify(members))
localStorage.setItem

</script>

<template>
  <div class="app">
    <RouterView/>
  </div>
</template>

<style>

#app {
  background-color: #F3F4F5;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

</style>
