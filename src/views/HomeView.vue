<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CardAluno msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardAluno from '@/components/CardAluno.vue'

export default {
  name: 'HomeView',
  components: {
    CardAluno
  }
}
</script>
