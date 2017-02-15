<template>
  <div id="app" class="container">
    <nav-blog></nav-blog>
    <header-blog></header-blog>
    <div class="row">
      <router-view></router-view>
      <router-view name='a'></router-view>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>

<script>

import HeaderBlog from './components/HeaderBlog'
import NavBlog from './components/NavBlog'
import FooterBlog from './components/FooterBlog'

export default {
  name: 'app',
  components: {
    NavBlog,
    HeaderBlog,
    FooterBlog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  box-shadow: 0 0 11px #AFA6A6;
  padding: 0;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
.blog-theme {
  width: 100%;
  height: 120px;
  background-color: #F0F2EF;
  margin-top: 30px;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
</style>
