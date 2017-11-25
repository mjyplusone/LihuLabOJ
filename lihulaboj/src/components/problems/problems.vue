<template>
    <div class="problems">
        this is problem list
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
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
    .problems
        width: 1200px
        margin: 0 auto
        padding: 20px 45px
        box-sizing: border-box
        // background: red
        @media only screen and (max-width: 1200px)
            width: 100%
</style>