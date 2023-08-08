<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <TheFooter/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TheFooter
}
}
</script>
