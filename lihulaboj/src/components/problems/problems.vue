<template>
<div class="problems-root">
    <div class="problems">
        <div class="problem-list">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>题目</th>
                        <th>通过率</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(problem, index) in problems">
                        <td class="state accepted">{{ showState }}</td>
                        <td><a href="" @click.prevent="selectProblem(problem.id)">{{ (currentPage - 1)  *15 + index + 1 }}</a></td>
                        <td><a href="" @click.prevent="selectProblem(problem.id)">{{ problem.title }}</a></td>
                        <td><span>{{ problemRate(problem) }}% ({{ problem.pass_num }} / {{ problem.total_num }})</span><span class="ratebar"><span class="hotbar" :style="'width:'+ 200*(problemRate(problem)/100) + 'px'"></span></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pagination @gopage="goPage" :count="this.count" :previous="this.previous" :next="this.next"></pagination>
    </div>  
    <problem ref="problem" :id="selectId"></problem>
</div>
</template>

<script type="text/ecmascript-6">
    import pagination from 'components/pagination/pagination.vue';
    import problem from 'components/problem/problem.vue';

    const Accepted = 0;
    const Failed = 1;
    const Uncomitted = 2;

    export default {
        data() {
            return {
                // problems: [],
                // count: 0,
                // previous: '',
                // next: '',
                selectId: 0,
                currentPage: 1,
                state: Accepted
            };
        },
        props: {
            problems: {
                type: Array,
                default: []
            },
            count: {
                type: Number,
                default: 0
            },
            previous: {
                type: String,
                default: ''
            },
            next: {
                type: String,
                default: ''
            }
        },
        // created() {
        //     this.$http.get('http://hhuui1.lihulab.net/api/problem/all').then((response) => {
        //         response = response.body;
        //         this.problems = response.results;
        //         this.count = response.count;
        //         this.previous = response.previous;
        //         this.next = response.next;
        //         console.log(response);
        //     });
        // },
        components: {
            pagination,
            problem
        },
        methods: {
            problemRate(problem) {
                if (problem.total_num === 0) {
                    return 0;
                } else {
                    return ((problem.pass_num / problem.total_num) * 100).toFixed(0);
                }
            },
            goPage(pageurl, currentpage) {
                this.$http.get(pageurl).then((response) => {
                    response = response.body;
                    // 父组件传过来的值不能直接在子组件中修改
                    this.$emit('changepage', response);
                    // this.problems = response.results;
                    // this.count = response.count;
                    // this.previous = response.previous;
                    // this.next = response.next;
                    console.log(response);
                });
                this.currentPage = currentpage;
                console.log(this.currentPage);
            },
            selectProblem(id) {
                this.selectId = id;
                this.$refs.problem.show();
                // 告知父组件在单个题目界面
                this.$emit('inproblem');
            }
        },
        computed: {
            showState() {
                if (this.state === Accepted) {
                    return '√';
                } else if (this.state === Failed) {
                    return '-';
                } else if (this.state === Uncomitted) {
                    return '';
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .problems
        position: relative 
        width: 1200px
        margin: 0 auto
        padding: 20px 45px
        box-sizing: border-box
        // background: red
        @media only screen and (max-width: 1200px)
            width: 100%
        .problem-list
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
                        td:nth-child(4)
                            width: 400px
                            a
                                font-weight: 700
                        span
                            display: inline-block
                            width: 100px
                        .ratebar  
                            position: relative
                            display: inline-block
                            width: 200px
                            height: 4px
                            margin-left: 10px
                            background: #dcdcdc
                            @media only screen and (max-width: 450px)
                                display: none
                            .hotbar
                                position: absolute
                                display: inline-block
                                height: 100%
                                background: #7fcbf0
                    tr:nth-child(1)
                        border-top: 2px solid #dddddd
                    tr:nth-child(odd)
                        background: #f9f9f9;
                    tr:nth-child(even)
                        background: #fff;     

</style>