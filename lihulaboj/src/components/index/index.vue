<template>
    <div class="index">
        <div class="title1">蠡湖Lab</div>
        <div class="title2">Online Judge</div>  
    </div>
</template>

<script type="text/ecmascript-6">
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
        .title1, .title2
            position: absolute
            left: 50%
            transform: translate(-50%, -50%)
            color: #ffffff
            font-size: 60px
            font-weight: 700
            @media only screen and (max-width: 450px)
                font-size: 25px
        .title1
            top: 35%
        .title2
            top: 50%
           
</style>