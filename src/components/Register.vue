<template>
  <div class="container">
    <form method="post" @submit.prevent="sub()" name="reg" enctype="multipart/form-data">
      <div class="form-group row">
        <label for="example-text-account" class="col-2 col-form-label">Account</label>
        <div class="col-10">
          <input class="form-control" type="text" id="example-text-account" v-model="blog.account" placeholder="Enter account" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="exampleInputEmail1" class="col-2 col-form-label">Email address</label>
        <div class="col-10">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="blog.email" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-nickname" class="col-2 col-form-label">Nickname</label>
        <div class="col-10">
          <input class="form-control" type="text" id="example-text-nickname" v-model="blog.nickname" placeholder="Enter Nickname" required>
        </div>
      </div>

      <div class="form-group row">
        <label for="example-text-password" class="col-2 col-form-label">Password</label>
        <div class="col-10">
          <input class="form-control" type="password" id="example-text-password" v-model="blog.password" placeholder="Enter Password" required>
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
      <input type="submit" value="Submit" class="btn btn-primary btn-lg btn-block">
    </form>

 <img class="avatar" v-bind:src="src"/>
<vue-core-image-upload 
  v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" 
  v-bind:crop="false"
  extensions="png,gif,jpeg,jpg"
  v-on:imageuploaded="imageuploaded">
</vue-core-image-upload>  

  </div>
</template>

<script>
  import VueCoreImageUpload from 'vue-core-image-upload'
  import API from '../api'
  export default {
    components: {VueCoreImageUpload},
    data () {
      return {
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        blog: {
          account: 'test',
          email: '123@123.com',
          nickname: 'zhou',
          password: 'test'
        },
        image: ''
      }
    },
    methods: {
      imageuploaded (res) {
        if (res.errcode === 0) {
          alert(123)
          this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
        }
      },
      onFileChange (e) {
        let files = e.target.files
        if (!files.length) {
          return
        }
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
        let data = {}
        data.image = this.image
        data.blog = this.blog
        API.localReg(data).then(response => {
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
