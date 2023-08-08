<template>
    <div class="app">
      <TheHeader />
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  import TheHeader from '@/components/TheHeader.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      TheHeader,
    },
  }
  </script>
  
  <style>
  .app {
    position: relative;
    min-height: 100vh;
  }
  
  nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
  </style>
  