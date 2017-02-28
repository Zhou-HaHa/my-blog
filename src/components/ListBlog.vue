<template>
  <div class="col-xs-12 col-md-9">
    <div class="container">
      <article v-for="article in articles" class="jumbotron">
      <p>
        <span>{{ formatDate(article.blog.updateDate) }}</span>
        <br>
        <h4><router-link :to="{name: 'detail', params: { id: article.account, blogId: article.blog.guid }}" >{{ article.blog.title }}</router-link></h4>
        <p v-html="article.blog.plainTxt"></p>
        <div class="text-right">
          <span>Post@ <span class="badge text-success">{{ formatDate(article.blog.updateDate) }}</span></span>
          <span>评论 <span class="badge text-success">(1)</span></span>
          <span>阅读 <span class="badge text-success">(2)</span></span>
          <span>赞<span class="badge text-success">(3)</span></span>
        </div>
      </p>
      </article>
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="total-pagination badge text-success">一共{{ totalPage }}页</li>
          <li v-show='totalSize > 9 && currentPage > 5'>
            <a v-on:click='getpagination(1)' class="badge text-success">首页</a>
          </li>
          <li v-show="currentPage != 1"><a v-on:click='getpagination(currentPage - 1)' class="badge text-success">上一页</a></li>
          <div v-for="pre in prefix">
            <li v-show="currentPage - pre > 0"><a v-on:click='getpagination(currentPage - pre)' class="badge text-success">{{ currentPage - pre }}</a></li>
          </div>
          <li v-show="currentPage <= totalPage"><a v-on:click='getpagination(currentPage)' class="badge text-danger">{{ currentPage }}</a></li>
          <div v-for="suf in suffix">
            <li v-show="currentPage + suf <= totalPage"><a v-on:click='getpagination(currentPage + suf)' class="badge text-success">{{ currentPage + suf }}</a></li>
          </div>
          <li v-show="currentPage < totalPage"><a v-on:click='getpagination(currentPage + 1)' class="badge text-success">下一页</a></li>
          <li v-show="last < totalPage"><a v-on:click='getpagination(totalPage)' class="badge text-success">末页</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import API from '../api'
export default {
  name: 'list-blog',
  data () {
    return {
      articles: [{
        'blog': {
          'blogId': 100,
          'userId': 100,
          'title': 'testBlog',
          'content': '<p>This is test</p>',
          'createDate': 1486742400000,
          'updateDate': 1486742400000,
          'plainTxt': 'This is test'
        },
        'statistics': {
          'blogId': 100,
          'readCount': 10,
          'commendCount': 2,
          'opposeCount': 1,
          'commentsCount': 1
        },
        'commentsList': null,
        'tagList': null,
        'categoryList': null
      }],

      pageSize: 12,
      totalSize: 1,
      totalPage: 1,
      currentPage: 1,
      prefix: [4, 3, 2, 1],
      suffix: [1, 2, 3, 4],
      last: 0
    }
  },
  mounted () {
    console.log(this.$store.getters)
    console.log(this.$store.getters.UserInfo)
    if (this.$store.getters.UserInfo) {
      API.getBlogListByUser(this.$store.getters.UserInfo, 1).then(response => {
        console.log('------------test-------------')
        console.log(this)
        console.log(response.data.data)
        this.articles = response.data.data
        this.totalPage = response.data.pagination.totalPage
        this.totalSize = response.data.pagination.totalSize
        this.currentPage = response.data.pagination.currentPage
      })
    } else {
      API.getBlogList(1).then(response => {
        console.log('------------blog-------------')
        console.log(this)
        console.log(response.data.data)
        this.articles = response.data.data
        console.log(this.articles)
        this.totalPage = response.data.pagination.totalPage
        this.totalSize = response.data.pagination.totalSize
        this.currentPage = response.data.pagination.currentPage
      })
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
    },
    getpagination: function (currentPage) {
      if (this.$store.getters.UserInfo) {
        API.getBlogListByUser(this.$store.getters.UserInfo, currentPage).then(response => {
          console.log(this)
          this.articles = response.data.data
          console.log(response.data.data)
          this.totalPage = response.data.pagination.totalPage
          this.totalSize = response.data.pagination.totalSize
          this.currentPage = response.data.pagination.currentPage
        })
      } else {
        API.getBlogList(currentPage).then(response => {
          console.log(this)
          this.articles = response.data.data
          console.log(response.data.data)
          this.totalPage = response.data.pagination.totalPage
          this.totalSize = response.data.pagination.totalSize
          this.currentPage = response.data.pagination.currentPage
        })
      }
    }

  }
}
</script>

<style scoped>
.container {
	width: 100%;
  padding: 10px;
}
article {
  margin-bottom: 10px; 
  padding: 10px;
  color: #4B4B4B;
  font-family: verdana,Arial,helvetica,sans-seriff;
  font-size: 12px;
}
nav {
  padding-left: 235px;
}
.total-pagination {
  padding-top: 7px;
}
.jumbotron {
  margin: 5px;
  background-color: rgba(112, 237, 0, 0.11);
}
</style>
