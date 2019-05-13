<template>
    <el-main>
        <el-tabs v-model="activeName" tab-position="left">
            <el-tab-pane :label="item.label" v-for="item in tablist" :key="item.label" :name="item.route"  :lazy="true">
                <articel></articel>
            </el-tab-pane>
        </el-tabs>
    </el-main>
</template>

<script>
import articel from '@components/details'
export default {
    components: {
        articel
    },
    data() {
        return {
            activeName: this.$route.query.type || 'talent',
            tablist: [
                {
                    label: '人才战略',
                    route: 'talent'
                },
                {
                    label: '招聘信息',
                    route: 'hiring'
                },
                {
                    label: '教育培训',
                    route: 'education'
                }
            ]
        }
    },
    created() {
        this.$router.push({
            query: {
                type: this.activeName
            }
        })
    },
    watch: {
        activeName(newVale) {
            this.$router.push({
                query: {
                    type: newVale
                }
            })
        },
        '$route'() {
            if(this.activeName !== this.$route.query.type) {
                this.activeName = this.$route.query.type
            }
        }
    }
}
</script>

<style>

</style>
