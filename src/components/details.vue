<template>
    <el-main class="details-wrap">
        <el-row class="title">{{ article.title }}</el-row>
        <el-row class="creator">{{ article.creator }}</el-row>
        <el-row class="content">
            <p v-html="article.content"></p>
        </el-row>
        <el-row class="time">
            <!-- <time>{{ article.time }}</time> -->
        </el-row>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            article: {
                title: '',
                creator: '',
                content: "",
                time: ''
            }
        }
    },
    created() {
        this.getArticle()
    },
    watch: {
        '$route'() {
            this.getArticle()
        }
    },
    methods: {
        getArticle() {
            if(this.$route.path.includes('about')) {
                this.$models.article.getArticleContentByModel(this.$route.name)
                .then((result) => {
                   Object.assign(this.article, result.data.data)
                }).catch((err) => {
                    console.log(err)
                });
            } else if (this.$route.path.includes('careerPlanning')) {
                this.$models.article.getArticleContentByModel(this.$route.query.type)
                .then((result) => {
                   Object.assign(this.article, result.data.data)
                }).catch((err) => {
                    console.log(err)
                });
            }else {
                this.$models.article.getArticleContent(this.$route.query.id)
                .then((result) => {
                    console.log(result.data.data)
                    Object.assign(this.article, result.data.data)
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
}
</script>

<style lang="less">
.details-wrap {
    background: #ffffff;
    margin: 10px 0;
    color: #888888;
    .title {
        text-align: center;
        font-weight: bolder;
        font-size: 20px;
        color: #333333;
    }
    .creator {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
    }
    .content {
        text-indent: 40px;
    }
    .time {
        text-align: right;
    }
    img {
        max-width: 90%;
    }
}
</style>
