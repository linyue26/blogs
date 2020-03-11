<template>
  <div>
    <!--头部-->
    <header-all ></header-all>
    <!--焦点图-->
    <div class="focus">
      <ul :style="contarinerStyle">
        <li>
          <img :src="now" alt="">
        </li>
      </ul>
      <!--<ul class="dots">-->
       <!--<li v-for="(item,index) in sliders" :click="slide"></li>-->
      <!--</ul>-->
    </div>
    <!--技术区块-->
    <div class="technology">
      <div class="content-div">
        <div class="title">
          <div class="title-cn">技术交流</div>
          <div class="title-en">technical exchange</div>
        </div>
        <div class="technical-div">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <img src="../../../static/img/5_03.jpg" alt="" class="technical-pic">
              <div class="technical-banner">
                <h2>离VR技术成熟还有多远?</h2>
                <h3>2018-9-21 发布</h3>
                <div class="technical-con">VR技术的推进和发一直是众人关注的热点，VR技术和产业何时能够成熟也一直是众人关注的...</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <ul class="technical-list" v-for="(item,index) in exchange">
                <li><i class="el-icon-circle-plus-outline"></i>{{item.title}}</li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <!--图片展示区块-->
        <div class="technical-div picture">
          <div class="title">
            <div class="title-cn">图片展示</div>
            <div class="title-en">picture presentation</div>
          </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="14" :lg="18" :xl="18">
              <div class="pic-center">
                <img src="../../../static/img/picture_10.jpg" alt="">
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="6" :xl="6">
              <ul>
                <li v-for="(item,index) in picImg">
                  <img :src=item.src alt="">
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
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
    data(){
      return{
        navBarFixed :'',
        sliders:['../../static/img/1.jpg', '../../static/img/2.jpg','../../static/img/3.jpg','../../static/img/4.jpg'],
        i:"0",
        now:"../../static/img/1.jpg",
        picImg:[
          {src:'../../static/img/picture_07.jpg'},
          {src:'../../static/img/picture_14.jpg'},
          {src:'../../static/img/picture_17.jpg'}
        ],
        exchange:[
          {title:'北野武的艺术观：拍电影和画画不一样 影评系列——《阿基里斯与龟》── 以画为喻'},
          {title:'《星际特工:千星之城》大场面镜头解析：工业光魔视效访谈'},
          {title:'调色师必须了解的知识 —曝光度、对比度、高光、阴影、白色色阶与黑色色阶'},
        ]
      }
    },
    components:{    //其他属性计算后的值
      'header-all':Headerall,   //引用头部组件
      'footer-all':Footerall   //引用头部组件
    },
    mounted:function(){   //页面初始化后执行
      this.now = this.sliders[0]
      let _this = this
      setInterval(function () {
        _this.i++
        _this.now = _this.sliders[_this.i]
        if (_this.i >= _this.sliders.length - 1) {
          _this.i = 0
        }
      },5000)
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  ul li
    list-style none
  .focus
    width 100%
    background #0c0c0c
    height 485px
    margin-top 85px
    overflow hidden
    position relative
  .focus ul
    width 11520px
  .focus li
    list-style none
    float left
  .dots
    position absolute
    bottom 0px
    left 45%
    width 100%
    height 30px
  .dots li
    width 12px
    height 12px
    margin 3px
    background #fff
    border-radius 50%
    border:2px solid #009a61
  .technology
    height auto
    padding 50px 0 0 0
    .content-div
      width 1200px
      margin 0 auto
      .title
        padding-bottom 50px
        color #000
        font-size 20px
        .title-cn
          padding-bottom 20px
        .title-en
          color #cecece
      .technical-div
        width 100%
        padding-bottom 10px
        .technical-pic
          float left
          text-align left
          width 35%
        .technical-banner
          padding-left 3%
          text-align left
          margin-left 35%
          width auto
          h2
            line-height 35px
            font-size 16px
          h3
            font-size 16px
          .technical-con
            padding-top 20px
            line-height 30px
        .technical-list
          line-height 30px
          text-align left
          width 80%
          padding-left 20%
      .technical-list li
        line-height 30px
        padding-bottom 10px
      .technical-list li i
        color #ffbc22
        font-size 20px
        padding-right 10px
      .picture
        margin-top 50px
        background #fdfdfd
        .pic-center
          width 100%
          background #fff
        .pic-center img
            padding 10px 0
</style>
