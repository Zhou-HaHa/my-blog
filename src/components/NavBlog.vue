<template>
  <nav class="navbar navbar-toggleable-md navbar-light">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
      <router-link to="/">
        <span class="badge badge-success">{{ nickName }} 的博客</span>
      </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/blog" class="nav-link">主页
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link">博问</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">新随笔</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">订阅</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">管理</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link"  data-toggle="modal" data-target="#myModal" v-if="!user">登录
          </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'nav-blog',
  data () {
    return {
      nickName: 'ZhouYanNan'
    }
  },
  computed: {
    ...mapGetters({
      UserInfo: 'UserInfo'
    }),
    ...mapActions({
      UserLogout: 'UserLogout'
    }),
    user () {
      return this.UserInfo
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('UserLogout')
    }
  }
}
</script>
<style scoped>
.nav {
  background-color: #5cb85c;
}
</style>
