<template>
    <el-row class="extend-wrap">
        <el-col :span="12" class="recruitment" @click.native="toCareerPlanning" style="cursor: pointer;">
            <img src="@imgs/ret.png">
        </el-col>
        <el-col :span="12" class="contact">
            <img src="@imgs/contact.png" class="contact_summary">
            <ul class="contact_detail">
                <li v-for="(item, key, index) in contactList" :key="index">
                    <i :class="item.icon"></i> <span class="detail_text">{{ item.text}}</span> <span class="detail_content">{{info[key] || '-'}}</span>
                </li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            contactList: {
                address: {
                    icon: 'icondizhi',
                    text: '地址',
                    content: this.info.address || '123'
                },
                telephone: {
                    icon: 'icondianhua',
                    text: '电话',
                    content: this.info.telephone
                },
                email: {
                    icon: 'iconyouxiang',
                    text: '邮箱',
                    content: this.info.email
                },
                fax: {
                    icon: 'iconchuanzhen',
                    text: '传真',
                    content: this.info.fax
                }
            }
        }
    },
    methods: {
        toCareerPlanning() {
            this.$router.push({
                name: 'hiring'
            })
        }
    }
}
</script>

<style lang="less">
.extend-wrap {
    .recruitment, .contact {
        // height: 200px;
        img {
            width: 100%;
            // height: 100%;
        }
    }
    .contact {
        position: relative;
        .contact_detail {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 99%;
            background: #eaeaea;
            position: absolute;
            top: 0;
            color: #333333;
            font-size: 20px;
            line-height: 1;
            opacity: 0;
            li {
                line-height: 60px;
                padding-left: 50px;
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
        &:hover {
            .contact_detail {
                opacity: 0.9;
            }
        }
    }
}
</style>
