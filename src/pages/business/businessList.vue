<template>
    <el-main class="business-list-wrap" v-loading="loading">
       <ul class="business-list">
           <li v-for="(item, index) in businessList" :key="index" @click="toDetails(item.id)">
               <span class="title">{{item.title}}</span>
               <i class="el-icon-caret-right"></i>
           </li>
       </ul>
       <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            businessList: [],
            currentPage: 1,
            pageSize: 10,
            total: 0
        }
    },
    created() {
        this.getOrganizationList()
    },
    methods: {
        getOrganizationList() {
            // this.loading = true
            this.$models.article.getArticleList({
                pageNum: this.currentPage,
                pageSize: this.pageSize,
                model: "department"
            }).then(res => {
                if(res.data.status === 1) {
                    this.businessList = res.data.data.body
                    this.total = res.data.data.page.total
                }
                this.loading = false
            })
        },
        handleSizeChange(val){
            this.pageSize = val
            this.currentPage = 1
            this.getOrganizationList()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getOrganizationList()
        },
        toDetails(id) {
            this.$router.push({
                name: 'article',
                query: {
                    id: id || 0
                }
            })
        }
    }
}
</script>

<style lang="less">
.business-list-wrap {
    .business-list {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        li {
            border-bottom: 1px solid #e1e1e1;
            padding: 10px 15px;
            .title {
                font-weight: bold;
            }
            .el-icon-caret-right {
                float: right;
                cursor: pointer;
            }
        }
    }
    .block {
        float: right;
        margin-top: 20px;
    }
}
</style>
