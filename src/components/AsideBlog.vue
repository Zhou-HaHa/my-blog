<template>
  <div class="col-xs-8 col-md-3">
    <div class="container-fluid">
      <div class="jumbotron" v-if="user">
        <img class="avatar" v-bind:src="avatar">
      </div>
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'aside-blog',
    data () {
      return {
        nickName: 'zhou'
      }
    },
    computed: {
      ...mapGetters({
        Avatar: 'Avatar',
        UserInfo: 'UserInfo'
      }),
      avatar () {
        alert(this.Avatar)
        return this.Avatar
      },
      user () {
        return this.UserInfo
      }
    }
  }
</script>

<style scoped>
.container {
  width: 100%;
  height: 200%;
  padding: 10px;
  margin: 5px;
  padding: 70px;
}

.jumbotron {
  margin: 5px;
  background-color: rgba(112, 237, 0, 0.11);
}
.avatar {
  height: 150px;
  width: 150px;
}
</style>
