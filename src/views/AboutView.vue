<template>
  <div class="about">
    <HelloWorld/>
    <TheFooter/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'TheAbout',
  components: {
    TheFooter,
    HelloWorld
},
  data(){
    return {

    }
  }
}
</script>
<style>
</style>
