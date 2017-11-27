<template>
  <div class="app">
    <div class="content-wrapper clearfix">
      <div class="content">
        <div class="tab-wrapper">
          <div class="tab">
            <div class="tab-left">
              <div class="tab-item icon"><a href="/">LihuLab OJ</a></div>
              <div class="tab-item">
                <router-link to="/problems" @click.native="flushCom">题目</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/submission" @click.native="setInproblem">提交</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/ranking" @click.native="setInproblem">排名</router-link>
              </div>
              <div class="tab-item">
                <router-link to="/help" @click.native="setInproblem">帮助</router-link>
              </div>
            </div>
            <div class="tab-right">
              <div class="profile"><a href="/">登录</a></div>
            </div>
          </div>
        </div>  
        <router-view @changepage="changePage" @inproblem="inProblem" :problems="problems" :count="count" :previous="previous" :next="next"></router-view>
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
        // all: {},
        problems: [],
        count: 0,
        previous: '',
        next: '',
        // 是否在在单个题目界面标志位
        inproblem: false
      };
    },
    created() {
      this.$http.get('http://hhuui1.lihulab.net/api/problem/all').then((response) => {
        response = response.body;
        this.problems = response.results;
        this.count = response.count;
        this.previous = response.previous;
        this.next = response.next;
        console.log(response);
      });
    },
    methods: {
      flushCom() {
        // 只有在单个题目界面时，点击题目tab才执行刷新
        if (this.inproblem === true) {
            // router是路由实例,例如:var router = new Router({})
            // router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
            // 在单个题目界面时，点击题目tab，由于仍然在problem组件，路由未发生变化，组件不会刷新，所以这里手动刷新界面，回到题目列表界面
            this.$router.go(0);
            this.inproblem = false;
        }
      },
      inProblem() {
        // 是否在在单个题目界面标志位
        this.inproblem = true;
      },
      setInproblem() {
        // 点到其他tab的时候，还原标志位
        this.inproblem = false;
      },
      changePage(response) {
        this.problems = response.results;
        this.count = response.count;
        this.previous = response.previous;
        this.next = response.next;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    height: 100%
    .content-wrapper
      min-height: 100%
      height: auto
      // background: red
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
                  &:hover
                    color: #333333
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
