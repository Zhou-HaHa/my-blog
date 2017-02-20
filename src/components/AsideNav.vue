<template>
  <div class="col-xs-8 col-md-3">
    <div class="container-fluid">
      <div class="jumbotron">
        <div><label><strong>技术：</strong></label> </div>
        <div><label><strong>园龄：</strong></label> </div>
        <div><label><strong>粉丝：</strong></label> </div>
        <div><label><strong>关注：</strong></label> </div>
      </div>
      <div class="jumbotron">
        <div><label><strong>昵称：</strong></label></div>
        <div><label><strong>园龄：</strong></label></div>
        <div><label><strong>粉丝：</strong></label></div>
        <div><label><strong>关注：</strong></label></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aside-nav',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.container {
}
.jumbotron {
  margin: 5px;
  background-color: rgba(112, 237, 0, 0.11);
}
</style>
