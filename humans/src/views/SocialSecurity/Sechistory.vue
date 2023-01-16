<!-- 社保历史归档  -->
<template>
  <div class="month">
    <div class="box">
      <el-card class="box-card">
        <template #header>
          <div
            class="card-header"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span class="paddTit">全公司</span>
            <span>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="Pick a day"
                  :size="size"
                />
              </div>
            </span>
          </div>
        </template>
        <div style="display: flex; align-items: center">
          <span style="padding: 10px 20px"> > </span>
          <span>
            <span style="padding: 10px 20px"
              >202001社保报表<span style="font-size: 16px; margin-left: 10px"
                >未归档</span
              ></span
            >
            <div style="padding: 10px 20px">社保报表</div>
          </span>
          <span
            style="
              width: 1px;
              height: 60px;
              background-color: #ccc;
              margin: 2px 10px;
            "
          ></span>
          <span style="padding: 10px 20px">
            <span style="color: #ccc">企业缴纳</span>
            <div style="margin-top: 10px; font-size: 18px">
              {{ data.top.enterprisePayment }}
            </div>
          </span>
          <span
            style="
              width: 1px;
              height: 60px;
              background-color: #ccc;
              margin: 2px 10px;
            "
          ></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">个人缴纳</span>
            <div style="margin-top: 10px; font-size: 18px">
              {{ data.top.personalPayment }}
            </div>
          </span>
          <span
            style="
              width: 1px;
              height: 60px;
              background-color: #ccc;
              margin: 2px 10px;
            "
          ></span>
          <span style="padding: 10px 30px">
            <span style="color: #ccc">合计</span>
            <div style="margin-top: 10px; font-size: 18px">
              {{ data.top.total }}
            </div>
          </span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { getHistory } from '@/api/Security'
let data: Array<object> = reactive({
  top: []
})
const size = ref<'default' | 'large' | 'small'>('default')
const value1 = ref('')

/*发起请求*/
getHistory().then((res) => {
  console.log(res)
  data.top = { ...res.data.data[0] }
})
</script>

<style lang="scss" scoped>
.month {
  height: 100%;
}
.box {
  height: calc(100% - 102px);
  background-color: #eaecef;
  padding: 15px;
}
.paddTit {
  font-weight: 900;
  color: #409eff;
  border-bottom: 3px solid #409eff;
}

</style>
