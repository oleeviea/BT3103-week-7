<template>
  <div id="app">
    <h1> OLIVIA'S ZI CHA RESTAURANT </h1>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  data () {
    return {
      title : 'Counter'
    }
  },
  components: {
    'Header': Header
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size:20px;
    text-align:center;
    margin-top: 60px;
    color:black;
  }

  h1 {
    background-color:steelblue;
    color:white;
    padding: 50px;
  }
</style>
