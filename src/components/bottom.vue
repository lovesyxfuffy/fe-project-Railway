<template>
    <el-main class="bottom-wrap" :style="`width:${$constants.containerWidth};margin: 0 auto;`">
        <el-row>
            <el-col :span="12" class="ret">
                <p>人才招聘</p>
                <el-row class="bottom-text" v-for="(item, index) in routeList" :key="index">
                    <el-col @click.native="toRoute(item.query)">
                        {{item.label}}
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12" class="contact">
                <p>联系我们</p>
                <ul class="contact_detail">
                    <li v-for="(item, key, index) in contactList" :key="index">
                        <i :class="item.icon"></i> <span class="detail_text">{{ item.text}}</span> <span class="detail_content">{{info[key]}}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-row style="background: rgb(245, 245, 245);
    border-top: 1px solid rgb(136, 136, 136);
    margin: 0px auto;
    padding-top: 40px;
    text-align: center;
    margin-top: 30px;">
            <div style="margin:0 auto; padding:20px 0;">
		 		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010502010893" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <span style="color:#939393;">Copyright © 2019 ztcjs.com.cn 中铁成建设</span><br>
                <img src="@imgs/copyright.png" style="float:left; margin-top: 5px"/>
                <p style="float:left;height:20px;line-height:20px;margin: 5px 0px 0px 5px; color:#939393;"> 
                    川公网安备： 51010502010893号 版权所有 ICP证： 蜀ICP备19017824号
                </p></a>
                <br>
                <div style="width:300px;margin:0 auto; padding:20px 0;">
                    <img src="@imgs/copyright.png" style="float:left; margin-top: 5px"/>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010502010893" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">川公网安备 51010502010893号</p></a>
                </div>
		 	</div>
        </el-row>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            routeList: [
                {
                    label: '人才战略',
                    query: 'talent'
                },
                {
                    label: '招聘信息',
                    query: 'hiring'
                },
                {
                    label: '教育培训',
                    query: 'education'
                }
            ],
            info: {
                address: '',
                telephone: '',
                email: '',
                fax: ''
            },
            contactList: {
                address: {
                    icon: 'icondizhi',
                    text: '地址',
                    // content: this.info.address
                },
                telephone: {
                    icon: 'icondianhua',
                    text: '电话',
                    // content: this.info.telephone
                },
                email: {
                    icon: 'iconyouxiang',
                    text: '邮箱',
                    // content: this.info.email
                },
                fax: {
                    icon: 'iconchuanzhen',
                    text: '传真',
                    // content: this.info.fax
                }
            }
        }
    },
    created() {
        this.getInfo()
    },
    methods: {
        toRoute(query) {
            this.$router.push({
                name: query
            })
        },
        getInfo() {
            this.$models.home.getConfig()
            .then(res => {
                if(res.data.status === 1) {
                    Object.assign(this.info, {
                        address: res.data.data.address[0],
                        telephone: res.data.data.telephone[0],
                        email: res.data.data.email[0],
                        fax: res.data.data.fax[0]
                    })
                }
            })
        }
    }
}
</script>

<style lang="less">
.bottom-wrap {
    border-top: 1px solid #888888;
    .ret, .contact {
        p {
            font-size: 20px;
            font-weight: bolder;
            color: #333333;
        }
    }
    .contact_detail {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 16px;
        line-height: 1;
        li {
            line-height: 40px;
        }
        i {
            font-size: 18px;
        }
        .detail_text {
            padding: 0 20px;
        }
        .detail_content {
            color: #665555;
        }
    }
    .bottom-text {
        color: #665555;
        cursor: pointer;
        line-height: 40px;
    }
}
</style>
