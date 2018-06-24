<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>

<style>
  html, #app {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
  }
  body{
    margin: 0;
    padding: 0;
  }
  main{
    padding-top: 40px;
    box-sizing: border-box;
  }
</style>
