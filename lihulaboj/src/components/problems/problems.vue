<template>
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
                    <tr v-for="problem in problems">
                        <td class="state accepted">{{ showState }}</td>
                        <td><a href="">{{ problem.id }}</a></td>
                        <td><a href="">{{ problem.title }}</a></td>
                        <td>{{ problemRate(problem) }}% ({{ problem.pass_num }} / {{ problem.total_num }})</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pagination @gopage="goPage" :count="this.count" :previous="this.previous" :next="this.next"></pagination>
    </div>
</template>

<script type="text/ecmascript-6">
    import pagination from 'components/pagination/pagination.vue';

    const Accepted = 0;
    const Failed = 1;
    const Uncomitted = 2;

    export default {
        data() {
            return {
                problems: {},
                count: 0,
                previous: '',
                next: '',
                state: Accepted
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
        components: {
            pagination
        },
        methods: {
            problemRate(problem) {
                if (problem.total_num === 0) {
                    return 0;
                } else {
                    return ((problem.pass_num / problem.total_num) * 100).toFixed(0);
                }
            },
            goPage(page) {
                this.$http.get(page).then((response) => {
                    response = response.body;
                    this.problems = response.results;
                    this.count = response.count;
                    this.previous = response.previous;
                    this.next = response.next;
                    console.log(response);
                });
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
        width: 1200px
        margin: 0 auto
        padding: 20px 45px
        box-sizing: border-box
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
                            a
                                font-weight: 700
                    tr:nth-child(1)
                        border-top: 2px solid #dddddd
                    tr:nth-child(odd)
                        background: #f9f9f9;
                    tr:nth-child(even)
                        background: #fff;        

</style>