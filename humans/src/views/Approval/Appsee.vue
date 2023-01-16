<template>
  <div class="Appsee">
    <!-- 左侧部分 -->
    <div class="left">
      <h3>申请请假</h3>
      <div class="top">
        <div class="top-left">
          <img src="@/assets/Apple.png" alt="" />
        </div>
        <div class="top-right">
          <h5>孙财</h5>
          <div class="text">部门：市场部</div>
          <span>入职时间：2018-11-04 16:00</span>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <span>申请类型：</span>|
            <span class="span">请假</span>
          </li>
          <li>
            <span>请假类型：</span>|
            <span class="span">事假</span>
          </li>
          <li>
            <span>申请单位：</span>|
            <span class="span">天</span>
          </li>
          <li>
            <span>开始时间：</span>|
            <span class="span">2019-09-16 00:00</span>
          </li>
          <li>
            <span>结束时间：</span>|
            <span class="span">2019-09-17 00:00</span>
          </li>
          <li>
            <span>请假时长：</span>|
            <span class="span">1</span>
          </li>
          <li>
            <span>申请事由：</span>|
            <span class="span">个人原因</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右侧部分 -->
    <div class="right">
      <h3>审批记录</h3>
      <div class="box">
        <div class="box-left">
          <span>2019-09-23 18:56</span>
          <span>2019-09-23 18:57</span>
          <span>2019-09-23 18:59</span>
        </div>
        <div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
              :color="activity.color"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activities = [
  {
    content: 'ZbZ发起请求',
    timestamp: '2019-09-23',
    color: '#0bbd87',
  },
  {
    content: 'tcast审批通过',
    timestamp: '2019-09-23',
    color: '#0bbd87',
  },
  {
    content: 'a01审批通过',
    timestamp: '2019-09-23',
    color: '#0bbd87',
  }
]
</script>

<style lang="scss" scoped>
.Appsee {
  margin: 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 74%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      margin: 10px 0;
    }
    .top {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .top-left {
        img {
          width: 80px;
          height: 80px;
          margin-top: 20px;
        }
      }
      .top-right {
        font-size: 14px;
        h5 {
          margin: 0;
          font-size: 14px;
        }
        .text {
          margin: 4px 0;
        }
      }
    }
    .bottom {
      margin-top: 30px;
      margin-left: 120px;
      font-size: 14px;
      color: rgb(109, 109, 109);
      ul {
        li {
          margin-bottom: 20px;
          .span {
            margin-left: 10px;
            color: #000;
          }
        }
      }
    }
  }
  .right {
    width: 25%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      margin: 10px 0;
      padding-bottom: 15px;
      border-bottom: 1px solid #ccc;
    }
    .box {
      display: flex;
      .box-left{
        display: flex;
        flex-direction: column;
        span{
          margin-bottom: 40px;
        }
      }
      .el-timeline {
        margin-left: 15px;
        font-weight: 700;
      }
    }
  }
}
</style>
