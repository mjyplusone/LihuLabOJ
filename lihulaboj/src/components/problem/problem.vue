<template>
    <div class="problem" v-show="showProblem">
        <div class="problem-wrapper">
            <div class="tab">
                <span><a @click="selectTabPro" :class="{'selected': selectedTab === 0}">题目</a></span>
                <span><a @click="selectTabSub" :class="{'selected': selectedTab === 1}">我的提交</a></span>
            </div>
            <div class="problem-content">
                <h2 class="title">{{ problemData.title }}</h2>
                <div class="createtime"><span>发布时间：{{ problemData.create_time | formatDate }}</span><span>时间限制：{{ problemData.max_cpu_time }}ms</span><span>内存限制：{{ problemData.max_memory }}M</span></div>
                <div class="description">
                    <span>描述</span>
                    <pre>{{ problemData.content }}</pre>
                </div>
                <div class="input">
                    <span>输入</span>
                    <pre>{{ problemData.input1 }}</pre>
                </div>
                <div class="output">
                    <span>输出</span>
                    <pre>{{ problemData.output1 }}</pre>
                </div>
                <div class="sampleinput">
                    <span>样例输入</span>
                    <pre>{{ problemData.input2 }}</pre>
                </div>
                <div class="sampleoutput">
                    <span>样例输出</span>
                    <pre>{{ problemData.output2 }}</pre>
                </div>
                <div class="language">
                    <span>选择语言</span><br/>
                    <span class="lang"><input type="radio" checked="checked" name="lang"/>C</span>
                    <span class="lang"><input type="radio" name="lang" />C++</span>
                </div>
                <div class="code">
                    <span>提交代码</span><br/>
                    <textarea placeholder="请输入代码"></textarea>
                    <button>提交代码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {formatDate} from '../../common/js/date.js';

    export default {
        data() {
            return {
                showProblem: false,
                selectedTab: 0,
                problemData: {}
            };
        },
        props: {
            id: {
                type: Number
            }
        },
        methods: {
            show() {
                console.log('show');
                this.showProblem = true;

                this.$nextTick(() => {
                    this.$http.get('http://hhuui1.lihulab.net/api/problem/' + this.id + '/detail').then((response) => {
                        response = response.body;
                        console.log(response);
                        if (response.code === 0) {
                            this.problemData = response.data;
                            console.log(this.problemData);
                        } else {
                            console.log('Error');
                        }
                    });
                });
            },
            selectTabPro() {
                console.log('pro');
                this.selectedTab = 0;
                console.log(this.selectedTab);
            },
            selectTabSub() {
                console.log('sub');
                this.selectedTab = 1;
                console.log(this.selectedTab);
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy年MM月dd日 hh:mm');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .problem
        position: absolute
        top: 47px
        left: 0
        right: 0
        bottom: 0
        background: #ffffff
        .problem-wrapper
            width: 1200px
            margin: 0 auto
            padding: 20px 45px
            box-sizing: border-box
            // background: green
            @media only screen and (max-width: 1200px)
                width: 100%
            .tab
                border-bottom: 1px solid #dddddd
                font-size: 0
                span 
                    display: inline-block
                    a
                        display: inline-block
                        padding: 15px 15px
                        font-size: 13px
                        cursor: pointer
                        &.selected
                            border-bottom: 3px solid #dd4b39
                            color: #dd4b39
            .problem-content
                margin-top: 20px
                span 
                    font-size: 16px
                    line-height: 2
                    color: #333333
                    font-weight: 700
                pre
                    white-space: pre-wrap   
                    word-wrap: break-word
                    font-size: 14px
                    line-height: 1.7
                    color: #333333
                .title
                    margin: 10px 0
                    text-align: center
                    font-size: 30px
                .createtime
                    text-align: center
                    span
                        margin: 0 15px
                        font-size: 13px
                        font-weight: normal
                        color: #7e8c8d
                .description, .input, .output, .sampleinput, .sampleoutput, .language, .code
                    margin-top: 15px 
                .sampleinput, .sampleoutput
                    pre
                        border: 1px solid #dddddd
                        padding: 5px 10px 
                .language
                    .lang
                        margin-right: 20px
                        font-weight: normal
                        input 
                            margin-right: 7px
                .code
                    textarea
                        resize: none;
                        width: 100%
                        height: 200px
                        border: 1px solid #dddddd 
                        overflow: auto    
                    button
                        margin-top: 15px
                        padding: 7px 10px
                        border: none 
                        border-radius: 3px
                        background: #8bb5fb
                        color: #ffffff
</style>