<template>
    <el-main class="news-list-wrap" v-loading="loading">
       <ul class="news-list">
           <li v-for="(item, index) in newsList" :key="index" @click="toDetails(item.id)">
               <span class="title">【 {{item.title}} 】</span>
               <span class="subTitle">{{item.subTitle}}</span>
               <span class="createTime">{{item.createTime}}</span>
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
      loading: true,
      newsList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },
  watch: {
        $route() {
            this.getNewsList()
        }
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
        this.loading = true;
        this.newsList = []
        this.$models.article.getArticleList({
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            model: this.$route.name
        })
        .then(res => {
            if (res.data.status === 1) {
                this.newsList = res.data.data.body;
                this.total = res.data.data.page.total
                this.loading = false
            } else {
                this.loading = false
            }
        })
        .catch(e => {
            this.loading = false
        });
    },
    handleSizeChange(val) {
        this.pageSize = val
        this.currentPage = 1
        this.getNewsList()
    },
    handleCurrentChange(val) {
        this.currentPage = val
        this.getNewsList()
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
};
</script>

<style lang="less">
.news-list-wrap {
  .news-list {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    li {
      border-bottom: 1px solid #e1e1e1;
      padding: 10px 5px;
    cursor: pointer;
      .title {
        font-weight: bold;
      }
      .subTitle {
      }
      .createTime {
        float: right;
        color: #888888;
      }
    }
  }
  .block {
    float: right;
    margin-top: 20px;
  }
}
</style>
