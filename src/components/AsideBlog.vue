<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <div><label><strong>昵称：</strong></label> {{ nickName }}</div>
      <div><label><strong>园龄：</strong></label> {{ nickName }}</div>
      <div><label><strong>粉丝：</strong></label> {{ nickName }}</div>
      <div><label><strong>关注：</strong></label> {{ nickName }}</div>
    </div>
    <div class="jumbotron">
      <div><label><strong>昵称：</strong></label> {{ nickName }}</div>
      <div><label><strong>园龄：</strong></label> {{ nickName }}</div>
      <div><label><strong>粉丝：</strong></label> {{ nickName }}</div>
      <div><label><strong>关注：</strong></label> {{ nickName }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aside-blog',
    data () {
      return {
        nickName: 'ZhouYanNan'
      }
    }
  }
</script>

<style scoped>
.container {
}
.jumbotron {
  margin: 5px;
}
</style>
