<template>
    <div class=''>
        <el-card class="box-card">
            <div class="card">
                <el-tag class="tag">
                    <el-icon color="#409EFF">
                        <InfoFilled />
                    </el-icon>
                    本月：社保再缴 公积金在缴 增员 减员 入职 离职
                </el-tag>
                <p><span @click="set">设置</span>
					<span @click="report">202003月报表</span>
                     </p>
            </div>
        </el-card>
        <el-card class="box-card">
            <ul>
                <li>
                    <ul>
                        <li>
                        <li>
                            <h4>聘用形式：</h4>
                            <div>
                                <el-checkbox label="正式" size="large" />
                                <el-checkbox label="非正式" size="large" />
                            </div>
                        </li>
                        <li class="Employee">
                            <h4>员工状态：</h4>
                            <div>
                                <el-checkbox label="在职" size="large" />
                                <el-checkbox label="离职" size="large" />
                            </div>
                        </li>
                </li>
            </ul>
            </li>
            <li>
                <h3 class="h3">部门:</h3>
                <div>
                    <el-checkbox label="总裁办" size="large" />
                    <el-checkbox label="行政部" size="large" />
                    <el-checkbox label="人事部" size="large" />
                    <el-checkbox label="财务部" size="large" />
                    <el-checkbox label="技术部" size="large" />
                    <el-checkbox label="运营部" size="large" />
                    <el-checkbox label="市场部" size="large" />
                    <el-checkbox label="财务核算部" size="large" />
                    <el-checkbox label="税务管理部" size="large" />
                    <el-checkbox label="薪资管理部" size="large" />
                    <br />
                    <el-checkbox label="Java研发部" size="large" />
                    <el-checkbox label="Python研发部" size="large" />
                    <el-checkbox label="Php研发部" size="large" />
                    <el-checkbox label="北京事业部" size="large" />
                    <el-checkbox label="上海事业部" size="large" />
                    <el-checkbox label="疯狗部" size="large" />

                </div>
            </li>
            </ul>
        </el-card>
		<!-- 表格 -->
		<el-card class="box-cardd">
			<div>
				<!-- 表格 -->
				<el-table
					:data="tableData"
					:default-sort="{ prop: 'date', order: 'descending' }"
					style="width: 100%"
				>
					<el-table-column type="index" label="序号"  />
					<el-table-column prop="name" label="姓名"  />
					<el-table-column prop="date" label="手机"  />
					<el-table-column prop="address" label="工号"  />
					<el-table-column prop="department" label="聘用形式"  />
					<el-table-column prop="tiem" label="部门"  />
					<el-table-column prop="gotiem" label="入职时间"  />
					<el-table-column prop="dz" label="工资基数"  />
					<el-table-column prop="gjzdz" label="津贴方案"  />
                    <el-table-column label="操作" width="140">
              <template #default="scope">
                <el-button size="small" type="primary">调薪</el-button>
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
				</el-table>
				<!-- 表格 -->
			</div>

			<!-- 分页 -->
			<div class="demo-pagination-block">
				<el-pagination
					v-model:current-page="currentPage4"
					v-model:page-size="pageSize4"
					:page-sizes="[100, 200, 300, 400]"
					:small="small"
					:disabled="disabled"
					:background="background"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
			<!-- 分页 -->
		</el-card>
    </div>
</template>

<script lang="ts" setup>
	import { InfoFilled } from '@element-plus/icons-vue';
	import { ref } from 'vue';
	import type { TableColumnCtx } from 'element-plus';
import router from '@/router';


const report = () => {
		router.push('/reports');
	};
	interface User {
		date: string;
		name: string;
		address: string;
		department: string;
		tiem: string;
		gotiem: string;
		dz: string;
		gjzdz: string;
	}
	const formatter = (row: User, column: TableColumnCtx<User>) => {
		return row.address;
	};
    // 点击set跳转到编辑页面
    const set = () => {
       router.push('/setting')
    }
	const tableData: User[] = [
		{
			date: '13800000002',
			name: '管理员',
			address: '9002',
			department: '正式',
			tiem: '总裁办',
			gotiem: '2018-11-02',
			dz: '579',
			gjzdz: '通用方案',
		},
        {
			date: '13800000003',
			name: '孙财',
			address: '111',
			department: '正式',
			tiem: '市场部',
			gotiem: '2018-11-04',
			dz: '40',
			gjzdz: '通用方案',
		},
        {
			date: '13800000004',
			name: '罗晓晓',
			address: '1111',
			department: '正式',
			tiem: '人事部',
			gotiem: '2018-12-02',
			dz: '6',
			gjzdz: '通用方案',
		},
        {
			date: '13400000001',
			name: '文吉星',
			address: '1001',
			department: '正式',
			tiem: '人事部',
			gotiem: '2018-01-01',
			dz: '10000',
			gjzdz: '通用方案',
		},
        {
			date: '13400000002',
			name: '巴思意',
			address: '1002',
			department: '正式',
			tiem: '人事部',
			gotiem: '2018-01-01',
			dz: '200',
			gjzdz: '通用方案',
		},
        {
			date: '13500000001',
			name: '乔海',
			address: '2001',
			department: '正式',
			tiem: '总裁办',
			gotiem: '2018-01-01',
			dz: '14',
			gjzdz: '通用方案',
		},
        {
			date: '13500000002',
			name: '董吴空',
			address: '2002',
			department: '正式',
			tiem: '总裁办',
			gotiem: '2018-01-01',
			dz: '246',
			gjzdz: '通用方案',
		},
        {
			date: '13500000003',
			name: '周乐天',
			address: '2002',
			department: '正式',
			tiem: '财务部',
			gotiem: '2018-01-01',
			dz: '20',
			gjzdz: '通用方案',
		},
        {
			date: '13600000001',
			name: '吕勇锐',
			address: '0001',
			department: '正式',
			tiem: '总裁办',
			gotiem: '1992-08-04',
			dz: '17776',
			gjzdz: '通用方案',
		},
        {
			date: '13600000002',
			name: '袁永安',
			address: '0002',
			department: '正式',
			tiem: '总裁办',
			gotiem: '1993-08-04',
			dz: '0',
			gjzdz: '通用方案',
		}
	];

	const currentPage4 = ref(4);
	const pageSize4 = ref(100);

	const handleSizeChange = (val: number) => {
		console.log(`${val} items per page`);
	};
	const handleCurrentChange = (val: number) => {
		console.log(`current page: ${val}`);
	};
</script>

<style scoped lang='scss'>
.tag {
    color: #605992;
}

.card {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
}

.Employee {
    margin-left: 200px;
}

.box-card {
    background-color: #fff;

    ul {
        margin-top: 20px;

        li {
            display: flex;
            align-items: center;

            .h3 {
                margin-top: -40px;
                margin-right: 35px;
            }
        }
    }
}
.box-cardd {
		margin-top: 20px;
	}

	.demo-pagination-block {
		margin-left: 1100px;
		margin-top: 10px;
	}
</style>
