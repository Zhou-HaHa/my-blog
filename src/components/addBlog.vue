<template>
  <div class="col-xs-12 col-md-9">
    <div class="container">
      <div class="alert" v-bind:class="[alert.type]" v-bind:style="{ display: alert.display }" role="alert">
        <strong>Well done!</strong> {{ message }}
      </div>
      <form method="post" @submit.prevent="add()" v-on:change="formChange">
        <div class="form-group row">
          <label for="example-text-title" class="col-2 col-form-label">Title</label>
          <div class="col-10">
            <input class="form-control" type="text" id="example-text-title" v-model="blog.title" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleTextarea" class="col-2 col-form-label">Content</label>
          <div class="col-10">
            <ueditor v-bind:value=defaultMsg v-bind:config=config v-on:input="input" v-on:ready="ready"></ueditor>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-text-title" class="col-2 col-form-label">Tag</label>
          <div class="col-10">
            <input class="form-control" type="text" id="example-text-title" v-model="blog.tags" required>
          </div>
        </div> 
        <input type="submit" value="Submit" class="btn btn-info btn-lg btn-block">
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">

  import API from '../api'
  import Ueditor from './Ueditor'

  export default {
    components: {
      Ueditor
    },
    data () {
      return {
        blog: {
          title: '123',
          content: '123',
          category: '123',
          tags: '123',
          account: this.$store.getters.UserInfo
        },
        message: '',
        alert: {
          type: 'alert-danger',
          display: 'none'
        },
        defaultMsg: '初始文本',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 320
        }
      }
    },

    methods: {
      add () {
        console.log(this.$store.getters.UserInfo)
        API.addBlog(this.blog).then(response => {
          if (response.data.success) {
            this.alert.type = 'alert-success'
            this.alert.display = ''
            this.message = response.data.message
            setTimeout(() => {
              this.alert.display = 'none'
              this.$router.push('/blog/' + this.$store.getters.UserInfo)
            }, 3000)
          } else {
            this.alert.type = 'alert-danger'
            this.alert.display = 'none'
            this.message = response.data.message
          }
        })
      },
      input (message) {
        this.blog.content = message
      },
      ready (message) {
        // TODO
        console.log(message)
      },
      formChange () {
        this.alert.display = 'none'
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

</style>
