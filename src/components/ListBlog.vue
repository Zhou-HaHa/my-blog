<template>
  <div class="col-xs-12 col-md-9">
    <div class="container">
      <article v-for="article in articles" class="jumbotron">
        <span>{{ article.date }}</span>
        <br>
        <h4>{{ article.title }}</h4>
        <div>{{ article.summary }}</div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-blog',
  data () {
    return {
      articles: [{
        date: '2017年2月9日',
        title: '修改npm的registry为淘宝镜像(npm.taobao.org)',
        summary: '来源：https://cnodejs.org/topic/4f9904f9407edba21468f31e 镜像使用方法（三种办法任意一种都能解决问题，建议使用第三种，将配置写死，下次用的时候配置还在)'
      }, {
        date: '2017年2月10日',
        title: '修改npm的registry为淘宝镜像(npm.taobao.org)',
        summary: '镜像使用方法（三种办法任意一种都能解决问题，建议使用第三种，将配置写死，下次用的时候配置还在): 1.通过config命令 2.命令行指定 3.编辑 ~/.npmrc 加入下面内容'
      }]
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
}
</style>
