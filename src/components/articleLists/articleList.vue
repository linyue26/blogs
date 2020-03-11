<template>
  <div>
    <!--头部-->
    <header-all ></header-all>
    <div class="articleMain">
      <div class="content">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <ul class="articleList">
              <li v-for="(item,index) in articleList">
                <router-link to="/detail">
                <div class="listContent">
                  <h2>{{item.title}}</h2>
                  <div>{{item.content}}</div>
                  <div class="listTip"><span>查看</span><span>评论 10</span><span>赞</span><span>2013-04-08 22:28:45</span></div>
                </div>
                <img :src=item.img alt="" class="listPic">
                </router-link>
              </li>
            </ul>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6"  :xl="6">
            <img src="../../../static/img/logo.jpg" alt="" class="listLogo">
          </el-col>
        </el-row>
      </div>
    </div>
    <!--底部-->
    <footer-all></footer-all>
  </div>
</template>
<script>
  import Headerall from '@/components/header/header.vue'  //引用头部组件
  import Footerall from '@/components/footer/footer.vue'  //引用底部组件
    export default {
        name: "articleList",
        data(){
          return{
            articleList:[
              {
                title:'Vue + TypeScript + Element 搭建简洁时尚的博客网站及踩坑记',
                content:'本文讲解如何在 Vue 项目中使用 TypeScript 来搭建并开发项目，并在此过程中踩过的坑 。TypeScript 具有类型系统，且是 JavaScript 的超集，TypeScript 在 2018年 势头迅猛，可谓遍地开花。',
                img:'../../static/img/sc1.jpg'
              },
              {
                title:'一次网站的性能优化之路 -- 天下武功，唯快不破',
                content:'2018 年 8 月，百度搜索资源平台发布的《百度移动搜索落地页体验白皮书 4.0 》中提到：页面的首屏内容应在 1.5 秒内加载完成。也许有人有疑惑：为什么是 1.5 秒内？哪些方式可加快加载速度？以下将为您解答这些疑问！',
                img:'../../static/img/sc1.jpg'
              },
              {
                title:'github 授权登录教程与如何设计第三方授权登录的用户表',
                content:'需求：在网站上想评论一篇文章，而评论文章是要用户注册与登录的，那么怎么免去这麻烦的步骤呢？答案是通过第三方授权登录。本文讲解的就是 github 授权登录的教程。',
                img:'../../static/img/sc1.jpg'
              },
              {
                title:'原生 js 实现一个有动画效果的进度条插件 progress',
                content:'一个用于装载进度条内容的 div （且叫做 container）。然后在 container 里面动态生成三个元素，一个是做为背景的 div (且叫做 progress)，一个是做为显示进度的 div (且叫做 bar)，还有一个是显示文字的 span (且叫做 text)。',
                img:'../../static/img/sc1.jpg'
              },
              {
                title:'服务器小白的我,是如何将node+mongodb项目部署在服务器上并进行性能优化的',
                content:'本文讲解的是：做为前端开发人员，对服务器的了解还是小白的我，是如何一步步将 node+mongodb 项目部署在阿里云 centos 7.3 的服务器上，并进行性能优化，达到页面 1 秒内看到 loading ，3 秒内看到首屏内容的。',
                img:'../../static/img/sc1.jpg'
              },
              {
                title:'项目文档说明：react + Ant Design 的 blog-react-admin',
                content:'此 blog-react-admin 项目是基于 蚂蚁金服开源的 ant design pro 之上，用 react 全家桶 + Ant Design 的进行再次开发的，项目已经开源，项目地址在 github 上。',
                img:'../../static/img/sc1.jpg'
              }
              ],
          }
        },
        components:{
          'header-all':Headerall,   //引用头部组件
          'footer-all':Footerall   //引用头部组件
        },
    }
</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/stylus/articleList.styl';
</style>
