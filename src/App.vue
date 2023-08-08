<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>

body, html {
  margin: 0px;
  min-height: 100vh;
  min-width: 100vw;
  display: flex
}

#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #405261;
  background-color: var(--background-grey);
  flex: 1 1 auto;

}

nav {
  justify-content: right;
  width: 100%;
  height: 51px;
  flex-shrink: 0;
  background: #40CAC2;
;
}

nav a {
  color: #FFF;
  font-family: Nunito;
  font-size: 30.944px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

nav a.router-link-exact-active {
  color: #FFF;
}
</style>
