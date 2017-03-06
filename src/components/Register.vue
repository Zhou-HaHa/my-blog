<template>
  <div class="container">
    <form method="post" @submit.prevent="sub()" name="reg" enctype="multipart/form-data">
      <div class="form-group row">
        <label for="example-text-account" class="col-2 col-form-label">Account</label>
        <div class="col-10">
          <input class="form-control" type="text" id="example-text-account" v-model="user.account" placeholder="Enter account" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="exampleInputEmail1" class="col-2 col-form-label">Email address</label>
        <div class="col-10">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-nickname" class="col-2 col-form-label">Nickname</label>
        <div class="col-10">
          <input class="form-control" type="text" id="example-text-nickname" v-model="user.nickname" placeholder="Enter Nickname" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-password" class="col-2 col-form-label">Password</label>
        <div class="col-10">
          <input class="form-control" type="password" id="example-text-password" v-model="user.password" placeholder="Enter Password" required>
        </div>
      </div>

      <div class="form-group row">
        <label for="example-text-password" class="col-2 col-form-label">Avatar</label>
        <div class="col-10" v-if="!image">
          <input type="file" class="form-control-file" v-on:change="onFileChange">
        </div>
        <div v-else class="col-10">
          <img v-bind:src="image" class="img-thumbnail avatar">
          <button v-on:click="removeImage">移除图片</button>
      </div>
      </div>
      <input type="submit" id="submit" value="Submit" class="btn btn-primary btn-lg btn-block" >
    </form>
  </div>
</template>

<script>
  import API from '../api'
  import $ from 'jquery'
  export default {
    data () {
      return {
        user: {
          account: 'test',
          email: '123@123.com',
          nickname: 'zhou',
          password: 'test'
        },
        image: '',
        imageFile: ''
      }
    },
    methods: {
      onFileChange (e) {
        let files = e.target.files
        if (!files.length) {
          return
        }
        this.imageFile = files[0]
        this.createImage(files[0])
      },
      createImage (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.image = e.target.result
        }
        reader.readAsDataURL(file)
      },
      removeImage () {
        this.image = ''
      },
      sub () {
        $('#submit').attr('disabled', true)
        let form = new FormData()
        form.append('image', this.imageFile)
        form.append('user', this.user)
        API.localReg(form).then(response => {
          $('#submit').attr('disabled', false)
          if (response.data.success) {
            alert('注册成功')
            this.$router.push('/blog/user/login')
          } else {
            alert('注册失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 70px;
  }
  .avatar {
    width: 100px;
    height: 100px;
  }
</style>
