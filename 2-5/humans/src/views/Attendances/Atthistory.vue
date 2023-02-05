<template>
  <div class="Sechistory">
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
            <span class="text">员工历史归档</span>
          </div>
        </template>
        <div>该年份无归档报表</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 'default',
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #eaecef;
  padding: 10px;
}

.text {
  margin-top: 10px;
  padding: 0 10px 10px;
  font-weight: 900;
  color: #409eff;
  border-bottom: 3px solid #409eff;
}
</style>
