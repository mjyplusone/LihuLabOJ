<template>
    <div class="index">
        <transition name="move">
            <div class="title" v-show="show">
                <div class="title1">蠡湖Lab</div>
                <div class="space"></div>
                <div class="title2">Online Judge</div>  
            </div>
        </transition>
        <transition name="fade">
            <div class="enter" v-show="show"><router-link to="/problems">ENTER</router-link></div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                show: false
            };
        },
        mounted() {
            this.show = true;
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .index
        position: absolute
        top: 46px
        left: 0
        right: 0
        bottom: 0
        // background: #ffffff
        background: url(../../../resource/img/index.jpg) no-repeat
        background-size: 100% 100%    
        opacity: 0.8
        .title
            position: absolute
            top: 45%
            transform: translateY(-50%)
            width: 100%
            opacity: 0.2
            transition: all 0.5s linear
            background: #ffffff
            &.move-enter
                opacity: 0
                transform: translate(-100%, -50%)
            .title1
                font-size: 60px   
                @media only screen and (max-width: 450px)
                    font-size: 40px 
            .title2
                font-size: 40px
                @media only screen and (max-width: 450px)
                    font-size: 25px
            .title1, .title2
                text-align: center
                line-height: 1.5
                color: black
                font-weight: 700  
        .enter
            position: absolute
            top: 70%
            left: 50%
            transform: translate(-50%, -50%)
            width: 140px
            height: 50px
            // border: 2px solid #0066cc
            border: 1px solid #66b3ff
            background: rgba(255, 255, 255, 0.2)
            text-align: center
            line-height: 50px
            font-size: 20px
            font-weight: 700
            transition: all 1s linear
            &.fade-enter
                opacity: 0
            a
                display: block
                width: 100%
                height: 100%
                color: #ffffff
                &:hover
                    background: rgba(255, 255, 255, 0.3)

</style>