<template>
    <div class="pagination">
        <ul>
           <li>上一页</li>
           <li>下一页</li>
            <!-- <li v-show="current != 1" @click="current-- && goto(current)" ><a href="#">上一页</a></li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
              <a href="#" >{{index}}</a>
            </li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="#" >下一页</a></li> -->
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>