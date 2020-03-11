<template>
  <header>
    <el-row :gutter="10">
      <el-col :xs="5" :sm="5" :md="8" :lg="8" :xl="8">
        <div class="grid-content">
          <img :src="imgList" class="imgWidth">
        </div>
      </el-col>
      <el-col :xs="19" :sm="19" :md="16" :lg="16" :xl="16">
        <div class="grid-content headerNav">
          <ul :default-active="$route.path"  @select="handleSelect" router>
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/articleList">文章</router-link></li>
            <li><a href="https://www.zhihu.com/people/linyue-95/activities" target="_blank">知乎</a></li>
            <li><router-link to="/messageBoard">留言</router-link></li>
            <li><router-link to="/test">测试页面</router-link></li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
    import imgs from '../../../static/img/logo.jpg'
    export default {
        name: "header",
        data(){
          return{
            imgList:imgs
          }
        },
      props:{
        activeIndex(){
          return this.$route.path.replace('/','')
        }
      },
      methods:{
        handleSelect(key, keyPath) {
          console.log(this);
          console.log(key,keyPath);
        }
      }
    }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  ul li
    text-decoration none
    list-style none
  header
    position fixed
    top 0
    z-index 1
    width 100%
    height 85px
    background #f0f1f3
    border-bottom #eee
    .imgWidth
      width 70px
      height  65px
      border-radius  50%
      margin-top 7px
    .el-col
      border-radius 4px
    .grid-content
      border-radius 4px
      min-height 36px
    .headerNav li
      float left
      padding 0 20px
      line-height 70px
    .headerNav li a
      text-decoration none
      color #000
</style>
