<template>
  <div id="app">
    <app-login></app-login>
  </div>
</template>

<script>
import Login from "./components/Login"

export default {
  name: 'App',
  components:{
    appLogin:Login
  }
}
</script>

<style>

</style>
