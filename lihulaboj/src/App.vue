<template>
  <div class="app">
    <div class="content-wrapper clearfix">
      <div class="content">
        <div class="tab-wrapper">
          <div class="tab">
            <div class="tab-left">
              <div class="tab-item icon"><a href="/">LihuLab OJ</a></div>
              <div class="tab-item">
                <router-link to="/problems">题目</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/submission">提交</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/ranking">排名</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/help">帮助</router-link>
              </div>
            </div>
            <div class="tab-right">
              <div class="profile"><a href="/">登录</a></div>
            </div>
          </div>
        </div>  
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      Copyright © 2017 Lihu Lab 京ICP备15062075号-1
    </div>
  </div>
</template>

<script>
  export default {
    // name: 'app'
    data() {
      return {
        all: {}
      };
    },
    created() {
      this.$http.get('http://hhuui1.lihulab.net/api/problem/all').then((response) => {
        response = response.body;
        console.log(response);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    height: 100%
    .content-wrapper
      min-height: 100%
      height: auto
      .content
        padding-bottom: 50px
        .tab-wrapper
          width: 100%
          height: 45px
          background: #f1f1f1
          border-bottom: 1px solid #dddddd
          .tab
            display: flex
            width: 1200px
            height: 45px
            // background: black
            margin: 0 auto
            font-size: 0
            @media only screen and (max-width: 1200px)
              width: 100%
              // background: red
            .tab-left
              flex: 1
              // background: green
              margin-left: 45px
              white-space: nowrap
              overflow: hidden
              .tab-item
                display: inline-block
                vertical-align: top
                line-height: 45px
                margin-right: 30px
                & > a
                  font-size: 13px
                  color: #777777
            .tab-right
              flex: 0 0 80px
              // background: blue
              margin-right: 45px
              position: relative
              .profile
                position: absolute
                right: 0
                display: inline-block
                vertical-align: top
                line-height: 45px
                & > a
                  font-size: 13px
                  color: #777777
    .footer
      margin-top: -50px
      height: 50px
      text-align: center
      line-height: 64px
      clear: both
      font-size: 13px
      color: #7e8c8d
</style>
