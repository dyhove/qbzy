<template>
    <div class="about">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '50px' : '180px'">
          <el-menu
            active-text-color="#fff"
            background-color="#4a7afb"
            class="menu"
            default-active="1"
            text-color="#fff"
            :collapse="isCollapse"
            router
          >
            <div class="img">
              <img
                class="imgs"
                v-if="isCollapse"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA3CAYAAADezaKIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNjNBNzBFOEJDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjNBNzBFN0JDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FIGnRAAABk5JREFUeNrsXE2IXEUQ7jUmZqLJ7qgx/oDiRhQUQZyIEMXTkyA5qUzwZC6ygzdBcBf0oIfAzk287YonPWVENGpEM6hoPPgznsSTzkGT3WxCdowmsvldq5hqbdrq93rez8x7b6qgeEvP696erq+rvqrXbybW19fVkGQ76EugD4KeAX0D9EslUiiZGBJgbgH9HvQ2o+0KaAD6hZihOHLVkP7P6xZY9P9+QUwggLGlAvqk47M7xAQCGFt2gG50fPa7mEAAY0sP1EWUDooJBDC2YEb0EdP+Aeg7YgLJkjjZCvoK6EOga6CHQN8EvSwmEMCISEgSERHAiAhgRLKWq3NJrCYmxtooBq8MHLdgqaIjgEm+0FW41CzwtR33HmGaOQOhYbp0XYTxehFzCBu3Af0XPb9OXbnrVDiXXZIl9WWGFsuUls9Ck7ECCzATjntX4VIdcG4IlrmwuUSM24a+j3t6mAVaC6ftyuphbgJ9CvR+1X9EcBj0/ZD7q8xObyfwOjUwUsexS4MBh8O5LcCYPRizFbL7XeMG0Hca+nY9PczYcZhnQN8C3WK0PQu6OaRP2rF5EC/S9ghRKPPo9WLOB4HQ9LinmkfAZJkl3Qv6tgUWlN/yyoEwXJgKTdcjb2FunQZP4eudekzIjZIg402US8A87/BgnxSFRCPBBW0Q6bWlFtNrIdjqHh5GS5cBXSkB84ij/VDOsyxOugmG7TAGD0LmYIejdp7WKCvAoGe5z+Gev8qQhyTdibUBgeA7ps13ZkLAmdtwlCVg7gbdxLR/CHoxQ0OmvriY1TBGHKRwVnXwoBnP7Kg1DoB5wNH+niqQYEqu+OJZM6qAZ3GhDgOwGY9w1MoTf8kyrX6UabuQIB7XHBVU7X3SSkHnscZieAbOs2G1txljbPQyCxb5tWtEqdWfigYYjvB+DXouQS0lGMJ61CL4UTMmWLS3mLfAjV6mETMcBaMAVBYhaUr1q7q2HB7Rppj2THfDBLOkXZ5gabtSdAYAdU1+ixCOsgIMIp97zvFZzLpFUqmmBLojxGmSyCIzt7pHOOrmBTBZhKS9TBu+TvJTgjG71mK7ill15VdJdQlWeNuUGc1aY2nQ7ByE8NrkF/p3rNBXp+8WFo5KC5gNoE8w7Umru12fcJCCB9CGRQM1mJQaPQKS70GOFlQjyG9AjxlyH46yCEn4/GUH0/6pKqbsYwyHGdtsAiLNEdnZvGdHWQFmP9N2Oc8LEGZcCj1zjvQ7ljejMRcZ3uebHZUGMLeDPs20fwv6ZwpE2kdSr/TSYSkO8AsJhm1FfNYbB8C8rPh3qD9XxZdGCqHJBGE7hMjm2hunBZjdoM85Pvu56GghEtxMMzQp/vlSrsNRWoC5C/TdkLFuLoGHUZSldVIMTRxgWgOk7LVRrEOStBpTaDyCiT8WdGPIfQdA7wH9EfQ46MdD/o4+Z1z0mZUoYzU4PmU9E+LGZckv9Juj8brqvzcTXNxszuJpI6nNxH1r4AAt3g1G26+qf7j7xZB+bUq9o+QH2kH/HiPwPG2PdRO7ANYb4NWOXEie33ePCxj0FLdaPGUPZUPoSXY6+r0K+poSKazE4TB3GmBZo5D0MOgxAsxuiuurTN+jsuQF53IxPMxjlBF9o/oHok6F3Is/hLjd8kQXZNnHCzAi4yNbKTHC98hO42YXwBRLKmS8a1X/zPQ2ylan6DpJBkZDX6P674Rtob+vU/3C6iRREcwe/1L9Q21IH84QpejRFdtOkJ4WD5OObCRD+BhnAxlY99lMANDG17t5ivpMGcbfRPf5yCXQk2ToZbouURsmKyvUvkwcdGh1mFyGWGO3bTMWOo5xXLu5Sn0mh/zd/jYMrkGwYlyPEyhQr2Q1iWEAJsw4emdq4+idyRnHdzcXTU5ahl8iQJggwOvZPEw2DDD7yQgVwzja+JNW7AzbzeMo58nQx+i6ZIUIM0xcLNIXc3EYLLz9IhTlf/JHBC/QoFgt6wK4PMzeMQKBSRLNsGB6iNgkcVwAs6cE3+2cAQBtcI4k4t+SKiYISRXKuys5nfOKwQtMkmiHibNi3uF4mH0jAMt5JiuwecFyEUli2T0M/urCdynWGDiSaPOCE2UmiWX2MJg6H/QAyyXL4Bwv0GFiTZa4vICZJ9AcVe7ikZBECUliexF/+UeAAQDFvRrwdjYnPgAAAABJRU5ErkJggg=="
                alt=""
              />
              <img
                v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA3CAYAAADezaKIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNjNBNzBFOEJDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNjNBNzBFN0JDQjkxMUU4OEQ0OERFQjFFQTNERTZCMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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"
                alt=""
              />
            </div>
            <el-menu-item index="/1">
              <el-icon><Aim /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/organizational">
              <el-icon><Cherry /></el-icon>
              <span>组织架构</span>
            </el-menu-item>
            <el-menu-item index="/3">
              <el-icon><User /></el-icon>
              <span>员工</span>
            </el-menu-item>
            <el-menu-item index="/4">
              <el-icon><Setting /></el-icon>
              <span>公司设置</span>
            </el-menu-item>
            <el-menu-item index="/permiss">
              <el-icon><Setting /></el-icon>
              <span>权限设置</span>
            </el-menu-item>
            <el-menu-item index="/security">
              <el-icon><Menu /></el-icon>
              <span>社保</span>
            </el-menu-item>
            <el-menu-item index="/attendance">
              <el-icon><Collection /></el-icon>
              <span>考勤</span>
            </el-menu-item>
            <el-menu-item index="/wages">
              <el-icon><ScaleToOriginal /></el-icon>
              <span>工资</span>
            </el-menu-item>
            <el-menu-item index="/Approval">
              <el-icon><DataLine /></el-icon>
              <span>审批</span>
            </el-menu-item>
            <div>
              <img
                class="images"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAC+CAYAAADkxemwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNkEzMzEzQ0JDODgxMUU4QTc0QkJDMEY1ODAxQjkyOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNkEzMzEzQkJDODgxMUU4QTc0QkJDMEY1ODAxQjkyOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNDhlMWQtY2IzNC04ODQxLTliNjQtYjBlOTUzZWNhYTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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"
                alt=""
              />
            </div>
          </el-menu>
        </el-aside>
        <!-- 右边部分 -->
        <el-main>
          <!-- 右边头部 -->
          <div class="head">
            <div class="left">
              <div class="icon">
                <el-icon @click="isCollapse = !isCollapse"><Fold /></el-icon>
              </div>
              <h3>江苏传智播客教育科技股份有限公司</h3>
              <span>体验版</span>
            </div>
            <div class="right">
              <!-- 搜索 -->
              <div class="search">
                <el-icon><Search /></el-icon>
              </div>
              <div class="questionFilled">
                <el-icon><QuestionFilled /></el-icon>
              </div>
              <!-- 全屏 -->
              <div class="full">
                <el-icon @click="fullScreen"><Rank /></el-icon>
              </div>
              <!-- 下拉框 -->
              <el-dropdown>
                <span class="span">
                  <div class="img"><img src="@/assets/logo.png" alt="" /></div>
                  管理员
                  <el-icon>
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>首页</el-dropdown-item>
                    <el-dropdown-item @click="loginOut"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
    Aim,
    Cherry,
    User,
    Setting,
    Collection,
    ScaleToOriginal,
    DataLine,
    Fold,
    Rank,
    ArrowDown,
    Search,
    QuestionFilled,
    Menu
  } from '@element-plus/icons-vue'
  import screenfull from 'screenfull' // 引入全屏插件
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const router = useRouter()
  const isCollapse = ref(false)
  
  /*全屏事件*/
  /**
   * screenfull.isFullscreen; // 布尔值——当前页面是否全屏
   * screenfull.isEnabled; // 布尔值——当前浏览器是否支持全屏
   */
  const fullScreen = () => {
    if (screenfull.isEnabled && !screenfull.isFullscreen) {
      screenfull.request() // 全屏
    }
  }
  
  /*退出登录*/
  const loginOut = () => {
    localStorage.removeItem('token') // 清除token
    router.replace('/') // 跳转页面
  }
  </script>
  
  <style lang="scss" scoped>
  .el-container,
  .el-aside,
  .el-menu,
  .about {
    height: 100%;
  }
  .img {
    text-align: center;
    padding: 10px 0;
    box-sizing: border-box;
    img {
      width: 140px;
      height: 55px;
    }
    .imgs {
      width: 40px;
      height: 20px;
    }
  }
  .menu {
    position: relative;
  }
  .images {
    width: 180px;
    position: absolute;
    bottom: 0;
  }
  .el-aside,
  .el-menu {
    box-shadow: 1px 2px 10px 1px #aaa;
  }
  .el-main {
    margin: 0;
    padding: 0;
    background-color: #eff1f4;
  }
  .head {
    height: 50px;
    background-color: #3f6ff8;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left {
    width: 430px;
    display: flex;
    align-items: center;
    color: #fff;
    .icon {
      color: #fff;
      font-size: 22px;
      line-height: 50px;
    }
    h3 {
      color: #fff;
      line-height: 50px;
      margin: 0;
      margin-left: 10px;
    }
    span{
      padding: 0 10px;
      height: 30px;
      background-color: #84a9fe;
      line-height: 30px;
      border-radius: 10px;
      margin-left: 15px;
      font-size: 14px;
    }
  }
  .right {
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 20px;
    .span {
      color: #fff;
      display: flex;
      align-items: center;
      .img {
        width: 25px;
        height: 20px;
        border: 3px solid #fff;
        border-radius: 30px;
        margin-right: 6px;
        position: relative;
        overflow: hidden;
        img {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 3px;
          left: -0px;
        }
      }
    }
  }
  </style>
  