<template>
<div class='row' id="login">
  <div class="col-xs-4 col-md-4"></div>
  <div class="col-xs-4 col-md-4">
   <div class="container">
          <div class="col-md-12">
            <h1 class="margin-bottom-15">登录</h1>
            <form class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form"method="post" @submit.prevent="sub()">
              <div class="form-group">
                <div class="col-md-12">
                  <div class="control-wrapper">
                    <label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
                    <input type="text" class="form-control" id="username" placeholder="用户名" v-model="user.username">
                  </div>
                </div>
              </div>  
              <div class="form-group">
                <div class="col-md-12">
                  <div class="control-wrapper">
                    <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
                    <input type="password" class="form-control" id="password" placeholder="密码" v-model="user.password">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12 text-center">
                  <input type="submit" value="登录" class="btn btn-info">
                  <router-link to="/" class="btn btn-default" data-dismiss="modal">返回</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>



  </div>
  <div class="col-xs-4 col-md-4"></div>
</div>

</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin'
      })
    },
    methods: {
      sub () {
        this.$store.dispatch('UserLogin', this.user)
      }
    }
  }
</script>

<style scoped>
  #login {
    padding-top: 120px;
  }

  h1 {
    padding-top: 20px;
  }
</style>
