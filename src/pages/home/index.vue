<template>
    <div v-loading="loading">
        <carousel :headImgs="headImgs"></carousel>
        <movement :headVideo="headVideo"></movement>
        <excellent :excellentData="excellentData"></excellent>
        <extend :info="info"></extend>
        <friend-site-list :list="links"></friend-site-list>
        <el-row style="background: #f5f5f5; margin: 0 auto; padding: 10px 0; text-align: center">
           	<div style="width:300px;margin:0 auto; padding:20px 0;">
		 		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010502010893" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <span style="color:#939393;">Copyright © 2019 ztcjs.com.cn 中铁成建设</span><br>
                <img src="@imgs/copyright.png" style="float:left; margin-top: 5px"/>
                <p style="float:left;height:20px;line-height:20px;margin: 5px 0px 0px 5px; color:#939393;"> 
                    版权所有 ICP证： 蜀ICP备19017824号
                </p></a>
		 	</div>
        </el-row>
    </div>
</template>

<script>
import carousel from './components/carousel'
import movement from './components/movement'
import excellent from './components/excellent'
import extend from './components/extend'
import friendSiteList from './components/friendSiteList'
export default {
    components: {
        carousel,
        movement,
        excellent,
        extend,
        friendSiteList
    },
    data() {
        return {
            loading: false,
            headImgs: [],
            headVideo: '',
            info: {},
            excellentData: [],
            links: [{
                // name: '百度',
                // value: 'https://www.baidu.com/s?ie=UTF-8&wd=js%20%E6%89%93%E5%BC%80%E6%96%B0%E7%9A%84%E9%93%BE%E6%8E%A5'
            }]
        }
    },
    created() {
        this.getHeadImgs()
        this.getConfig()
        this.getExcellent()
        this.getLinks()
    },
    methods: {
        getHeadImgs() {
            this.$models.home.getHeadImgs()
                .then(res => {
                    if(res.data.status === 1) {
                        this.headImgs = res.data.data
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                })
                .catch(e => {
                    console.log(e)
                    this.loading = false
                })
        },
        getConfig() {
            this.$models.home.getConfig()
                .then(res => {
                    if(res.data.status === 1) {
                        this.headVideo = res.data.data.headVideo[0]
                        this.$set(this.info, 'address', res.data.data.address[0])
                        this.$set(this.info, 'telephone', res.data.data.telephone[0])
                        this.$set(this.info, 'email', res.data.data.email[0])
                        this.$set(this.info, 'fax', res.data.data.fax[0])
                    }
                })
        },
        getExcellent() {
            this.$models.home.getExcellent()
                .then(res => {
                    if(res.data.status === 1) {
                        this.excellentData = res.data.data
                    }
                })
        },
        getLinks() {
            this.$models.article.getArticleContentByModel('link')
                .then((result) => {
                    this.links = JSON.parse(result.data.data.content)
                }).catch((err) => {
                    console.log(err)
                });
        }
    }
}
</script>

<style>

</style>
