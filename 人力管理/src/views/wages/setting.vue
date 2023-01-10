<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="计薪设置" name="first">
            <div class="form">
                <el-form-item label="对应社保自然月">
                    <el-select v-model="form.region" placeholder="次月">
                        <el-option label="次月" value="shanghai" />
                        <el-option label="当月" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item label="社保数据来源">
                    <el-input v-model="form.name" disabled />
                </el-form-item>
                <el-form-item label="考勤数据来源">
                    <el-input v-model="form.names" disabled />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </div>
        </el-tab-pane>
        <el-tab-pane label="津贴设置" name="second">
            <div class="form">
                <el-form :model="forms" label-width="120px">
                <el-form-item label="通用方案">
                    <el-input v-model="forms.name" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="forms.beizhu" />
                </el-form-item>
                <el-form-item label="使用计税方式">
                    <el-radio-group v-model="forms.resources">
                        <el-radio label="税前" />
                        <el-radio label="税后" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')
const form = reactive({
    region: '',
    name: '考勤数据',
    names:"社保数据"
})
const forms = reactive({
    name: '通用方案',
    beizhu: '福利薪资发放规则',
    resources: '税前'
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
}

.form {
    width: 400px;
    text-align: center;
}
</style>