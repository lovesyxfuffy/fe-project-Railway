<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-for="(val, key, index) in data" :key="index">
            <el-breadcrumb-item v-if="val.route" :to="{name: val.route}">{{key}}</el-breadcrumb-item>
            <el-breadcrumb-item v-else>{{key}}</el-breadcrumb-item>
            <template v-if="val.children">
                <breadcrumb :data="val.children"></breadcrumb>
            </template>
        
        </el-breadcrumb>
    </div>
</template>

<script>
import breadcrumb from '@components/breadcrumb.vue'
export default {
    name: 'breadcrumb',
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        breadcrumb
    }
}
</script>

<style>

</style>
