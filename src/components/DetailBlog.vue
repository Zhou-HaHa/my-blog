<template>
  <div class="col-xs-12 col-md-9">
    <div class="container">
      <article class="jumbotron">
      <p>
        <span>{{ formatDate(article.updateDate) }}</span>
        <br>
        <h4>{{ article.title }}</h4>
        <p v-html="article.content"></p>
        <div>
          <h6>标签: <span class="label label-success" v-for="tag in tagList" >{{ tag.tagName }}</span></h6>
        </div>
        <div class="text-right">
          <span>Post@ <span class="badge text-success">{{ formatDate(article.createDate) }}</span></span>
          <span>评论 <span class="badge text-success">({{ statistics.commendCount }})</span></span>
          <span>阅读 <span class="badge text-success">({{ statistics.readCount }})</span></span>
        </div>
      </p>
      </article>
    </div>
  </div>
</template>

<script>

import API from '../api'

export default {
  name: 'detail-blog',
  data () {
    return {
      article: {updateDate: 1486742400000, title: 'test', content: 'content'},
      statistics: {},
      commentsPOList: [],
      tagList: [{tagName: 'HTML'}, {tagName: 'WEB'}],
      categoryList: []
    }
  },

  created () {
    API.getBlogDetail(this.$route.params).then(response => {
      if (response.data.success) {
        this.article = response.data.data.blog
        this.statistics = response.data.data.statistics
        this.commentsPOList = response.data.data.commentsPOList
        this.tagList = response.data.data.tagList
        this.categoryList = response.data.data.categoryList
      }
    })
  },

  methods: {
    formatDate: function (date) {
      let now = new Date(date)
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let d = now.getDate()
      let hour = now.getHours()
      let minute = now.getMinutes()
      let second = now.getSeconds()
      return year + '年' + month + '月' + d + '日 ' + hour + ':' + minute + ':' + second
    }

  }
}

</script>

<style scoped>
  
  .container {
    margin-top: 10px;
  }

  .jumbotron {
    background-color: rgba(112, 237, 0, 0.11);
  }
</style>
