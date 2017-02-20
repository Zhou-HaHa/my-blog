<template>
  <div class="col-xs-12 col-md-9">
    <div class="container">
      <article class="jumbotron">
      <p>
        <span>{{ formatDate(article.blog.updateDate) }}</span>
        <br>
        <h4>{{ article.blog.title }}</h4>
        <p>{{ article.blog.content }}</p>
        <div class="text-right">
          <span>Post@ <span class="badge text-success">{{ formatDate(article.blog.updateDate) }}</span></span>
          <span>评论 <span class="badge text-success">({{ article.statistics.commendCount }})</span></span>
          <span>阅读 <span class="badge text-success">({{ article.statistics.readCount }})</span></span>
        </div>
      </p>
      </article>
    </div>
    <span class="badge">42</span>
  </div>
</template>

<script>

export default {
  name: 'detail-blog',
  data () {
    return {
      article: {blog: {updateDate: 1486742400000, title: 'test', content: 'content'}, statistics: {commendCount: 1, readCount: 1}}
    }
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
