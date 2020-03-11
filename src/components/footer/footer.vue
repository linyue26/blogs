<template>
    <footer>
      <ul>
        <li>首页</li>
        <li>文章</li>
        <li>知乎</li>
        <li>留言</li>
        <li>微信</li>
        <li>微博</li>
      </ul>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  footer
    margin-top 50px
    height 219px
    background #151519
    width 100%
  footer ul
    width 500px;
    margin 0 auto
    line-height 219px
  footer ul li
    float left
    padding 0 10px
    color #fff
    list-style none
</style>
