<template>
<div>
  <div class="container">
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-3">
      <small>posts - {{ posts }}, comments - {{ comments }}, trackbacks - {{ trackbacks }}</small>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'header-blog',
  data () {
    return {
      posts: 1,
      comments: 1,
      trackbacks: 0
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;

}
small {
  font-weight: bold;
}
</style>
