<template>
  <div id="app">
  <header class="bt-header">
    <vi-header></vi-header>
  </header>
  <div id="main">
      <router-view></router-view>
  </div>
  <footer class="bt-footer">
    <vi-footer></vi-footer>
  </footer>
  </div>
</template>

<script>
import ViHeader from '@/components/layouts/Header'
import ViFooter from '@/components/layouts/Footer'

export default {
  name: 'app', 
  components: {
    ViHeader,
    ViFooter
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#main {
  padding: 0 20px;
  min-height: 400px;
  color: #4f4f4f;
}
.bt-header,
.bt-footer {
  padding: 0 40px;
  height: 64px;
  line-height: 64px;
  background: #252a33;
}
.bt-footer{
  position: fixed;
  bottom: 0px;
  width:100%;
}
</style>
