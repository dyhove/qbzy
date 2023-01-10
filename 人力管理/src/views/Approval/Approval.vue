<template>
	<div>
		<!-- <p>审批</p> -->
		<el-card class="box-card">
    <div class="card">
			<el-tag class="tag"><el-icon color="#409EFF"><InfoFilled /></el-icon> 当前审批中0本月审批通过1本月审批驳回0</el-tag>
			<el-button type="primary">流程设置</el-button>
		</div>
  </el-card>

	<!-- 表格 -->
	<el-card class="box-cardd">
    <div >
			<el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"

  >
		<el-table-column type="selection"  width="55" />
    <el-table-column prop="date" label="审批类型" sortable width="180" />
    <el-table-column prop="name" label="审批人" sortable width="180" />
    <el-table-column prop="datename" label="当前审批人" sortable width="180" />
    <el-table-column prop="tiem" label="审批发起时间" sortable width="180" />
    <el-table-column prop="address" label="审批状态" sortable width="180">
			<template #default="scope">
				<p class="p">
					<span :class="scope.row.address=='审批通过'?'active':(scope.row.address=='审批不通过'?'active1':'active2')">·</span>
					<span>{{scope.row.address}}</span>
				</p>
			</template>
		</el-table-column>
    <el-table-column  label="操作" width="260">
			<template #default="scope">
          <el-button link type="primary" size="small">查看</el-button>
        </template>
		</el-table-column>
  </el-table>
		</div>
		<!-- 分页 -->
	<div class="demo-pagination-block">
    <!-- <div class="demonstration">All combined</div> -->
    <el-pagination
		 background
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
	<!-- 分页 -->
  </el-card>
	<!-- 表格 -->


	</div>
</template>

<script lang="ts" setup>
import {InfoFilled} from '@element-plus/icons-vue'
import type { TableColumnCtx } from 'element-plus'
import {ref}from 'vue'
interface User {
  date: string
  name: string
  address: string
  datename: string
	tiem:string

}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const tableData: User[] = [
  {
    date: '请假',
    name: '孙财',
    address: '审批通过',
		datename:'文吉星 巴思慧',
		tiem:'2019-09-23 18:56'
  },
  {
    date: '请假',
    name: '孙财',
    address: '审批通过',
		datename:'乔海 董昊空',
		tiem:'2019-09-23 19:00'
  },
  {
    date: '请假',
    name: '孙财',
    address: '撤销',
		datename:'董昊空',
		tiem:'2019-09-23 19:02'
  },
  {
    date: '加班',
    name: '孙财',
    address: '审批通过',
		datename:'孙财',
		tiem:'2019-09-23 19:29'
  },
  {
    date: '离职',
    name: '孙财',
    address: '撤销',
		datename:'乔海',
		tiem:'2020-03-05 19:54'
  },
  {
    date: '离职',
    name: '管理员',
    address: '审批不通过',
		datename:'董昊空',
		tiem:'2020-03-05 19:56'
  },
  {
    date: '加班',
    name: '管理员',
    address: '审批不通过',
		datename:'吕勇锐',
		tiem:'2020-03-05 19:56'
  },
  {
    date: '离职',
    name: '管理员',
    address: '审批通过',
		datename:'乔空',
		tiem:'2020-03-05 20:00'
  },
  {
    date: '加班',
    name: '管理员',
    address: '审批通过',
		datename:'海昊空',
		tiem:'2019-09-23 18:56'
  },
  {
    date: '加班',
    name: '管理员',
    address: '撤销',
		datename:'乔董',
		tiem:'2019-09-23 18:56'
  },
  {
    date: '加班',
    name: '孙财',
    address: '撤销',
		datename:'董空',
		tiem:'2019-09-23 18:56'
  },
  {
    date: '请假',
    name: '孙财',
    address: '审批通过',
		datename:'昊空',
		tiem:'2019-09-23 18:56'
  }
]

const currentPage4 = ref(4)
const pageSize4 = ref(100)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>
.box-card{
	height: 70px;
}
.tag{
	color: #000;
}
.card{
	display: flex;
	justify-content: space-between;
	// align-items: center;
}

.active{
	// width: 30px;
	// height: 30px;
	border-radius: 50%;
	font-size: 20px;
	color: #00A854;
}
.active1{
	// width: 30px;
	// height: 30px;
	border-radius: 50%;
	font-size: 20px;
	color: #F04134;
}
.active2{
	// width: 30px;
	// height: 30px;
	border-radius: 50%;
	font-size: 20px;
	color: #BFBFBF;
}
.p{
	display: flex;
	align-items: center;
}

.demo-pagination-block{
	margin-left: 600px;
}
</style>
