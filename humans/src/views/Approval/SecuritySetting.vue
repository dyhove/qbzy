<template>
  <div class="Security">
    <ul>
      <li>
        <span>请假</span> |
        <div class="box">
          <el-switch v-model="value1" style="--el-switch-on-color: #13ce66" />
          <el-icon class="icon" @click="dialogVisible = true"
            ><Setting
          /></el-icon>
        </div>
      </li>
      <li>
        <span>加班</span> |
        <div class="box">
          <el-switch v-model="value2" style="--el-switch-on-color: #13ce66" />
          <el-icon class="icon" @click="dialogVisible = true"
            ><Setting
          /></el-icon>
        </div>
      </li>
      <li>
        <span>离职</span> |
        <div class="box">
          <el-switch v-model="value3" style="--el-switch-on-color: #13ce66" />
          <el-icon class="icon" @click="dialogVisible = true"
            ><Setting
          /></el-icon>
        </div>
      </li>
    </ul>
    <!-- 弹出框 -->
    <el-dialog v-model="dialogVisible" title="提示" width="30%">
      <div class="block">
        <el-avatar :size="50" :src="circleUrl" />
        <div>将文件拖到此处</div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(false)
const dialogVisible = ref(false)
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)
</script>

<style lang="scss" scoped>
.Security {
  margin: 15px;
  height: 120px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  ul {
    display: flex;
    li {
      width: 180px;
      border: 1px solid #eee;
      display: flex;
      margin-right: 20px;
      border-radius: 4px;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      box-sizing: border-box;
      color: rgb(121, 120, 120);
      .box {
        position: relative;
        .el-switch {
          margin-right: 10px;
        }
        .icon {
          position: absolute;
          top: -6px;
        }
      }
    }
  }
}
.block {
  border: 1px solid #eee;
  width: 100%;
  height: 200px;
  text-align: center;
  .el-avatar {
    margin-top: 60px;
  }
}
</style>
