<template>
    <div class="ranking">
        <div class="ranking-list">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>用户名</th>
                        <th>通过题目数量</th>
                        <th>总提交数量</th>
                        <th>AC率</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="problem in problems">
                        <td class="state accepted">{{ showState }}</td>
                        <td><a href="" @click.prevent="selectProblem(problem.id)">{{ problem.id }}</a></td>
                        <td><a href="" @click.prevent="selectProblem(problem.id)">{{ problem.title }}</a></td>
                        <td><span>{{ problemRate(problem) }}% ({{ problem.pass_num }} / {{ problem.total_num }})</span><span class="ratebar"><span class="hotbar" :style="'width:'+ 200*(problemRate(problem)/100) + 'px'"></span></span></td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .ranking
        width: 1200px
        margin: 0 auto
        padding: 20px 45px
        box-sizing: border-box
        @media only screen and (max-width: 1200px)
            width: 100%
        .ranking-list
            width: 100%
            background: #ffffff
            table
                width: 100%
                tr
                    height: 35px
                    th
                        font-weight: 700
                    th, td
                        text-align: left
                        vertical-align: middle
                        font-size: 13px
                        padding: 0 10px
                        a
                            color: #1155cc
                            &:hover
                                text-decoration: underline
                        &.state
                            font-weight: 900
                        &.accepted
                            color: green
                        &.failed
                            color: orange
                thead
                    background: #fff;          
                tbody 
                    tr
                        border-top: 1px solid #dddddd
                        td:nth-child(1)
                            width: 30px
                        td:nth-child(2)
                            width: 50px
</style>