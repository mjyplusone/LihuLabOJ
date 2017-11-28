<template>
    <div class="pagination">
        <ul>
           <li v-show="this.previous != null" @click="goPage(previous)"><a href="#">上一页</a></li>
           <li v-for="page in pageNum" v-show="page <= currentPage+3 && page >= currentPage-3" @click="goPage(baseUrl+page)" :class="{'current': page === currentPage}"><a href="#">{{ page }}</a></li>
           <li v-show="this.next != null" @click="goPage(next)"><a href="#">下一页</a></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    const defaultPageSize = 15;

    export default {
        data() {
            return {
                baseUrl: 'http://hhuui1.lihulab.net/api/problem/all?page=',
                currentPage: 1
            };
        },
        props: {
            count: {
                type: Number,
                default: 0
            },
            previous: {
                type: String,
                default: null
            },
            next: {
                type: String,
                default: null
            }
        },
        computed: {
            pageNum() {
                return this.count % defaultPageSize;
            }
        },
        methods: {
            goPage(pageurl) {
                console.log(pageurl);
                if (pageurl.charAt(pageurl.length - 1) === 'l') {
                    this.currentPage = 1;
                } else {
                    this.currentPage = pageurl.charAt(pageurl.length - 1) - '0';
                }
                console.log(this.currentPage);
                this.$emit('gopage', pageurl, this.currentPage);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pagination
        position: relative
        margin-top: 20px
        ul
            position: absolute
            right: 0
            li
                display: inline-block
                margin: 0 5px
                a
                    display: inline-block
                    padding: 7px 10px
                    border: 1px solid #ddd
                    background: #fff
                    color: #0E90D2
                    font-size: 12px
                    cursor: pointer
                    &:hover
                        background: #eee
                &.current
                    a
                        background: #0E90D2
                        color: #fff

</style>