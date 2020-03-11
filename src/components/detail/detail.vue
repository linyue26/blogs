<template>
  <div>
    <!--头部-->
    <header-all ></header-all>
    <div class="articleMain">
      <div class="content">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <h2 class="detailH2">Vue + TypeScript + Element 搭建简洁时尚的博客网站及踩坑记</h2>
            <div class="detailTip"><span>2019-03-29 11:11:33</span><span>字数 33109</span><span>阅读 1189</span><span>评论 5</span><span>喜欢 1</span></div>
            <div class="detailMain">
              前言
              本文讲解如何在 Vue 项目中使用 TypeScript 来搭建并开发项目，并在此过程中踩过的坑 。

              TypeScript 具有类型系统，且是 JavaScript 的超集，TypeScript 在 2018年 势头迅猛，可谓遍地开花。

              Vue3.0 将使用 TS 重写，重写后的 Vue3.0 将更好的支持 TS。2019 年 TypeScript 将会更加普及，能够熟练掌握 TS，并使用 TS 开发过项目，将更加成为前端开发者的优势。

              所以笔者就当然也要学这个必备技能，就以 边学边实践 的方式，做个博客项目来玩玩。

              此项目是基于 Vue 全家桶 + TypeScript + Element-UI 的技术栈，且已经开源，github 地址 blog-vue-typescript 。

              因为之前写了篇纯 Vue 项目搭建的相关文章 基于vue+mint-ui的mobile-h5的项目说明 ，有不少人加我微信，要源码来学习，但是这个是我司的项目，不能提供原码。

              所以做一个不是我司的项目，且又是 vue 相关的项目来练手并开源吧。
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
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
      components:{
        'header-all':Headerall,   //引用头部组件
        'footer-all':Footerall   //引用头部组件
      }
    }
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/stylus/articleList.styl';
</style>
