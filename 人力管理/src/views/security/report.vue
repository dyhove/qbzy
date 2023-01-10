<!-- 社保月报表  -->
<template>
    <div class="SecMonreport">
        <div class="box">
            <el-card class="box-card">
                <!-- 顶部 -->
                <template #header>
                    <div class="card-header">
                        <span class="paddTit">社保报表</span>
                    </div>
                </template>
                <!-- 中间部分 -->
                <div class="card-header">
                    <div style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            ">
                        <div style="display: flex; align-items: center">
                            <span style="display: flex; align-items: center; margin-right: 20px">
                                <span class="color" style="background-color: #cfeffe"></span>已离职
                            </span>
                            <span style="display: flex; align-items: center; margin-right: 20px">
                                <span class="color" style="background-color: #a8f8bb"></span>再入职
                            </span>
                            <span style="display: flex; align-items: center; margin-right: 20px">
                                <span class="color" style="background-color: #fedbd7"></span>公司合计
                            </span>
                            <span style="display: flex; align-items: center; margin-right: 20px">
                                <span class="color" style="background-color: #ffe8c9"></span>一级部门
                            </span>
                            <span style="display: flex; align-items: center">
                                <span class="color" style="background-color: #fdfcd5"></span>二级部门
                            </span>
                        </div>
                        <div>
                            <el-button size="small" type="primary">导出</el-button>
                        </div>
                    </div>
                </div>
                <!-- 表格 -->
                <el-table border :data="tableData.tableData" style="width: 100%; margin-top: 20px">
                    <el-table-column type="index" label="序号" width="60" />
                    <el-table-column prop="username" label="姓名" />
                    <el-table-column prop="timeOfEntry" label="入职时间" width="160" />
                    <el-table-column prop="mobile" label="手机号" />
                    <el-table-column prop="idNumber" label="身份证号码" width="150" />
                    <el-table-column prop="theHighestDegreeOfEducation" label="学历" />
                    <el-table-column prop="address" label="开户行" />
                    <el-table-column prop="firstLevelDepartment" label="一级部门" />
                    <el-table-column prop="address" label="二级部门" />
                    <el-table-column prop="address" label="工作城市" />
                    <el-table-column prop="socialSecurityComputerNumber" label="社保电脑号" />
                    <el-table-column prop="address" label="公积金账号" />
                    <el-table-column prop="address" label="离职时间" />
                    <el-table-column prop="address" label="户籍类型" />
                    <el-table-column prop="providentFundCity" label="参保城市" />
                    <el-table-column prop="socialSecurityMonth" label="社保月份" />
                    <el-table-column prop="socialSecurityBase" label="社保基数" />
                    <el-table-column prop="socialSecurity" label="社保合计" />
                    <el-table-column prop="socialSecurityEnterprise" label="社保企业" />
                    <el-table-column prop="socialSecurityIndividual" label="社保个人" />
                    <el-table-column prop="providentFundCity" label="公积金城市" />
                    <el-table-column prop="socialSecurityMonth" label="公积金月份" />
                    <el-table-column prop="providentFundBase" label="公积金基数" />
                    <el-table-column prop="providentFundBase" label="公积金企业基数" />
                    <el-table-column prop="personalRatioOfProvidentFund" label="公积金企业比例" />
                    <el-table-column prop="providentFundBase" label="公积金个人基数" />
                    <el-table-column prop="personalRatioOfProvidentFund" label="公积金个人比例" />
                    <el-table-column prop="totalProvidentFund" label="公积金合计" />
                    <el-table-column prop="providentFundEnterprises" label="公积金企业" />
                    <el-table-column prop="providentFundIndividual" label="公积金个人" />
                    <el-table-column prop="address" label="养老企业基数" />
                    <el-table-column prop="address" label="养老企业比例" />
                    <el-table-column prop="address" label="养老企业" />
                    <el-table-column prop="address" label="养老个人基数" />
                    <el-table-column prop="address" label="养老个人比例" />
                    <el-table-column prop="address" label="养老个人" />
                    <el-table-column prop="address" label="失业企业基数" />
                    <el-table-column prop="address" label="失业企业比例" />
                    <el-table-column prop="address" label="失业企业" />
                    <el-table-column prop="address" label="失业个人基数" />
                    <el-table-column prop="address" label="失业个人比例" />
                    <el-table-column prop="address" label="失业个人" />
                    <el-table-column prop="address" label="医疗企业基数" />
                    <el-table-column prop="address" label="医疗企业比例" />
                    <el-table-column prop="address" label="医疗企业" />
                    <el-table-column prop="address" label="医疗个人基数" />
                    <el-table-column prop="address" label="医疗个人比例" />
                    <el-table-column prop="address" label="医疗个人" />
                    <el-table-column prop="address" label="工伤企业基数" />
                    <el-table-column prop="address" label="工伤企业比例" />
                    <el-table-column prop="address" label="工伤企业" />
                    <el-table-column prop="address" label="生育企业基数" />
                    <el-table-column prop="address" label="生育企业比例" />
                    <el-table-column prop="address" label="生育企业" />
                    <el-table-column prop="address" label="大病企业基数" />
                    <el-table-column prop="address" label="大病企业比例" />
                    <el-table-column prop="address" label="大病企业" />
                    <el-table-column prop="address" label="大病个人基数" />
                    <el-table-column prop="address" label="大病个人比例" />
                    <el-table-column prop="address" label="大病个人" />
                    <el-table-column prop="providentFundNotes" label="公积金备注" />
                    <el-table-column prop="socialSecurityNotes" label="社保备注" />
                </el-table>
                <!-- 底部 -->
                <div class="footer" style="margin-top: 20px; text-align: center">
                    <el-button type="primary">归档01月份报表</el-button>
                    <el-button type="primary">新建报表</el-button>
                    <el-button type="info">取消</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const tableData: Array<object> = reactive({
    tableData: [
        {
            accumulationFundEnterpriseBase
                :
                10000,
            apersonOfGreatDisease
                :
                null,
            archiveId
                :
                null,
            bankCardNumber
                :
                null,
            baseOfIndustrialInjuryEnterprises
                :
                null,
            baseOfSeriousIllness
                :
                null,
            bigDiseaseEnterprise
                :
                null,
            childbearingEnterprise
                :
                null,
            fertilityEnterpriseBase
                :
                null,
            firstLevelDepartment
                :
                "总裁办",
            householdRegistrationType
                :
                null,
            id
                :
                null,
            idNumber
                :
                null,
            individualBaseOfProvidentFund
                :
                10000,
            industrialInjuryEnterprise
                :
                null,
            leaveDate
                :
                null,
            medicalEnterprise
                :
                null,
            medicalEnterpriseBase
                :
                null,
            medicalIndividual
                :
                null,
            medicalPersonalBase
                :
                null,
            medicalPersonalRatio
                :
                null,
            mobile
                :
                "13800000002",
            oldAgeIndividual
                :
                null,
            openingBank
                :
                null,
            participatingInTheCity
                :
                "北京",
            pensionEnterprise
                :
                null,
            pensionEnterpriseBase
                :
                null,
            percentageOfUnemployedIndividuals
                :
                null,
            personalBaseOfSeriousIllness
                :
                null,
            personalPensionBase
                :
                null,
            personalPensionRatio
                :
                null,
            personalProportionOfSeriousIllness
                :
                null,
            personalRatioOfProvidentFund
                :
                0.12,
            proportionOfFertilityEnterprises
                :
                null,
            proportionOfIndustrialInjuryEnterprises
                :
                null,
            proportionOfMedicalEnterprises
                :
                null,
            proportionOfPensionEnterprises
                :
                null,
            proportionOfProvidentFundEnterprises
                :
                0.12,
            proportionOfSeriouslyIllEnterprises
                :
                null,
            proportionOfUnemployedEnterprises
                :
                null,
            providentFundAccount
                :
                null,
            providentFundBase
                :
                10000,
            providentFundCity
                :
                "北京",
            providentFundEnterprises
                :
                12,
            providentFundIndividual
                :
                12,
            providentFundMonth
                :
                "202001",
            providentFundNotes
                :
                "xxx12345",
            socialSecurity
                :
                4380,
            socialSecurityBase
                :
                10000,
            socialSecurityComputerNumber
                :
                null,
            socialSecurityEnterprise
                :
                3060,
            socialSecurityIndividual
                :
                1320,
            socialSecurityMonth
                :
                "202001",
            socialSecurityNotes
                :
                "xxxx",
            theHighestDegreeOfEducation
                :
                null,
            theNumberOfUnemployedIndividuals
                :
                null,
            timeOfEntry
                :
                "2018-11-02T08:00:00.000+0000",
            totalProvidentFund
                :
                24,
            twoLevelDepartment
                :
                null,
            unemployedEnterprise
                :
                null,
            unemployedIndividual
                :
                null,
            unemploymentEnterpriseBase
                :
                null,
            userId
                :
                "1063705989926227968",
            username
                :
                "管理员",
            workingCity
                :
                null,
            yearsMonth
                :
                null
        },
        {
            accumulationFundEnterpriseBase
                :
                2277,
            apersonOfGreatDisease
                :
                null,
            archiveId
                :
                null,
            bankCardNumber
                :
                null,
            baseOfIndustrialInjuryEnterprises
                :
                null,
            baseOfSeriousIllness
                :
                null,
            bigDiseaseEnterprise
                :
                null,
            childbearingEnterprise
                :
                null,
            fertilityEnterpriseBase
                :
                null,
            firstLevelDepartment
                :
                "市场部",
            householdRegistrationType
                :
                null,
            id
                :
                null,
            idNumber
                :
                "1234567890",
            individualBaseOfProvidentFund
                :
                2277,
            industrialInjuryEnterprise
                :
                null,
            leaveDate
                :
                null,
            medicalEnterprise
                :
                null,
            medicalEnterpriseBase
                :
                null,
            medicalIndividual
                :
                null,
            medicalPersonalBase
                :
                null,
            medicalPersonalRatio
                :
                null,
            mobile
                :
                "13800000003",
            oldAgeIndividual
                :
                null,
            openingBank
                :
                null,
            participatingInTheCity
                :
                "北京",
            pensionEnterprise
                :
                null,
            pensionEnterpriseBase
                :
                null,
            percentageOfUnemployedIndividuals
                :
                null,
            personalBaseOfSeriousIllness
                :
                null,
            personalPensionBase
                :
                null,
            personalPensionRatio
                :
                null,
            personalProportionOfSeriousIllness
                :
                null,
            personalRatioOfProvidentFund
                :
                6,
            proportionOfFertilityEnterprises
                :
                null,
            proportionOfIndustrialInjuryEnterprises
                :
                null,
            proportionOfMedicalEnterprises
                :
                null,
            proportionOfPensionEnterprises
                :
                null,
            proportionOfProvidentFundEnterprises
                :
                6,
            proportionOfSeriouslyIllEnterprises
                :
                null,
            proportionOfUnemployedEnterprises
                :
                null,
            providentFundAccount
                :
                null,
            providentFundBase
                :
                2277,
            providentFundCity
                :
                "北京",
            providentFundEnterprises
                :
                136.62,
            providentFundIndividual
                :
                136.62,
            providentFundMonth
                :
                "202001",
            providentFundNotes
                :
                null,
            socialSecurity
                :
                1450.064,
            socialSecurityBase
                :
                3388,
            socialSecurityComputerNumber
                :
                "x1111",
            socialSecurityEnterprise
                :
                1002.848,
            socialSecurityIndividual
                :
                447.216,
            socialSecurityMonth
                :
                "202001",
            socialSecurityNotes
                :
                "sdauy",
            theHighestDegreeOfEducation
                :
                "高中",
            theNumberOfUnemployedIndividuals
                :
                null,
            timeOfEntry
                :
                "2018-11-04T08:00:00.000+0000",
            totalProvidentFund
                :
                273.24,
            twoLevelDepartment
                :
                null,
            unemployedEnterprise
                :
                null,
            unemployedIndividual
                :
                null,
            unemploymentEnterpriseBase
                :
                null,
            userId
                :
                "1066370498633486336",
            username
                :
                "孙财",
            workingCity
                :
                null,
            yearsMonth
                :
                null
        },
        {
            accumulationFundEnterpriseBase
                :
                5000,
            apersonOfGreatDisease
                :
                null,
            archiveId
                :
                null,
            bankCardNumber
                :
                null,
            baseOfIndustrialInjuryEnterprises
                :
                null,
            baseOfSeriousIllness
                :
                null,
            bigDiseaseEnterprise
                :
                null,
            childbearingEnterprise
                :
                null,
            fertilityEnterpriseBase
                :
                null,
            firstLevelDepartment
                :
                "人事部",
            householdRegistrationType
                :
                null,
            id
                :
                null,
            idNumber
                :
                null,
            individualBaseOfProvidentFund
                :
                5000,
            industrialInjuryEnterprise
                :
                null,
            leaveDate
                :
                null,
            medicalEnterprise
                :
                null,
            medicalEnterpriseBase
                :
                null,
            medicalIndividual
                :
                null,
            medicalPersonalBase
                :
                null,
            medicalPersonalRatio
                :
                null,
            mobile
                :
                "13800000004",
            oldAgeIndividual
                :
                null,
            openingBank
                :
                null,
            participatingInTheCity
                :
                "北京",
            pensionEnterprise
                :
                null,
            pensionEnterpriseBase
                :
                null,
            percentageOfUnemployedIndividuals
                :
                null,
            personalBaseOfSeriousIllness
                :
                null,
            personalPensionBase
                :
                null,
            personalPensionRatio
                :
                null,
            personalProportionOfSeriousIllness
                :
                null,
            personalRatioOfProvidentFund
                :
                12,
            proportionOfFertilityEnterprises
                :
                null,
            proportionOfIndustrialInjuryEnterprises
                :
                null,
            proportionOfMedicalEnterprises
                :
                null,
            proportionOfPensionEnterprises
                :
                null,
            proportionOfProvidentFundEnterprises
                :
                12,
            proportionOfSeriouslyIllEnterprises
                :
                null,
            proportionOfUnemployedEnterprises
                :
                null,
            providentFundAccount
                :
                null,
            providentFundBase
                :
                5000,
            providentFundCity
                :
                "北京",
            providentFundEnterprises
                :
                600,
            providentFundIndividual
                :
                600,
            providentFundMonth
                :
                "202001",
            providentFundNotes
                :
                null,
            socialSecurity
                :
                2140,
            socialSecurityBase
                :
                5000,
            socialSecurityComputerNumber
                :
                null,
            socialSecurityEnterprise
                :
                1480,
            socialSecurityIndividual
                :
                660,
            socialSecurityMonth
                :
                "202001",
            socialSecurityNotes
                :
                null,
            theHighestDegreeOfEducation
                :
                null,
            theNumberOfUnemployedIndividuals
                :
                null,
            timeOfEntry
                :
                "2018-12-02T08:00:00.000+0000",
            totalProvidentFund
                :
                1200,
            twoLevelDepartment
                :
                null,
            unemployedEnterprise
                :
                null,
            unemployedIndividual
                :
                null,
            unemploymentEnterpriseBase
                :
                null,
            userId
                :
                "1071632760222810112",
            username
                :
                "罗晓晓",
            workingCity
                :
                null,
            yearsMonth
                :
                null
        },
        {
            accumulationFundEnterpriseBase
: 
5900,
apersonOfGreatDisease
: 
null,
archiveId
: 
null,
bankCardNumber
: 
null,
baseOfIndustrialInjuryEnterprises
: 
null,
baseOfSeriousIllness
: 
null,
bigDiseaseEnterprise
: 
null,
childbearingEnterprise
: 
null,
fertilityEnterpriseBase
: 
null,
firstLevelDepartment
: 
"人事部",
householdRegistrationType
: 
null,
id
: 
null,
idNumber
: 
null,
individualBaseOfProvidentFund
: 
5900,
industrialInjuryEnterprise
: 
null,
leaveDate
: 
null,
medicalEnterprise
: 
null,
medicalEnterpriseBase
: 
null,
medicalIndividual
: 
null,
medicalPersonalBase
: 
null,
medicalPersonalRatio
: 
null,
mobile
: 
"13400000001",
oldAgeIndividual
: 
null,
openingBank
: 
null,
participatingInTheCity
: 
"北京",
pensionEnterprise
: 
null,
pensionEnterpriseBase
: 
null,
percentageOfUnemployedIndividuals
: 
null,
personalBaseOfSeriousIllness
: 
null,
personalPensionBase
: 
null,
personalPensionRatio
: 
null,
personalProportionOfSeriousIllness
: 
null,
personalRatioOfProvidentFund
: 
12,
proportionOfFertilityEnterprises
: 
null,
proportionOfIndustrialInjuryEnterprises
: 
null,
proportionOfMedicalEnterprises
: 
null,
proportionOfPensionEnterprises
: 
null,
proportionOfProvidentFundEnterprises
: 
12,
proportionOfSeriouslyIllEnterprises
: 
null,
proportionOfUnemployedEnterprises
: 
null,
providentFundAccount
: 
null,
providentFundBase
: 
5900,
providentFundCity
: 
"北京",
providentFundEnterprises
: 
708,
providentFundIndividual
: 
708,
providentFundMonth
: 
"202002",
providentFundNotes
: 
"11111",
socialSecurity
: 
2584.2,
socialSecurityBase
: 
5900,
socialSecurityComputerNumber
: 
null,
socialSecurityEnterprise
: 
1805.4,
socialSecurityIndividual
: 
778.8,
socialSecurityMonth
: 
"202002",
socialSecurityNotes
: 
"2222",
theHighestDegreeOfEducation
: 
null,
theNumberOfUnemployedIndividuals
: 
null,
timeOfEntry
: 
"2018-01-01T00:00:00.000+0000",
totalProvidentFund
: 
1416,
twoLevelDepartment
: 
null,
unemployedEnterprise
: 
null,
unemployedIndividual
: 
null,
unemploymentEnterpriseBase
: 
null,
userId
: 
"1074238801330704384",
username
: 
"文吉星",
workingCity
: 
null,
yearsMonth
: 
null
        },
        {
            accumulationFundEnterpriseBase
: 
null,
apersonOfGreatDisease
: 
null,
archiveId
: 
null,
bankCardNumber
: 
null,
baseOfIndustrialInjuryEnterprises
: 
null,
baseOfSeriousIllness
: 
null,
bigDiseaseEnterprise
: 
null,
childbearingEnterprise
: 
null,
fertilityEnterpriseBase
: 
null,
firstLevelDepartment
: 
"人事部",
householdRegistrationType
: 
null,
id
: 
null,
idNumber
: 
null,
individualBaseOfProvidentFund
: 
null,
industrialInjuryEnterprise
: 
null,
leaveDate
: 
null,
medicalEnterprise
: 
null,
medicalEnterpriseBase
: 
null,
medicalIndividual
: 
null,
medicalPersonalBase
: 
null,
medicalPersonalRatio
: 
null,
mobile
: 
"13400000002",
oldAgeIndividual
: 
null,
openingBank
: 
null,
participatingInTheCity
: 
null,
pensionEnterprise
: 
null,
pensionEnterpriseBase
: 
null,
percentageOfUnemployedIndividuals
: 
null,
personalBaseOfSeriousIllness
: 
null,
personalPensionBase
: 
null,
personalPensionRatio
: 
null,
personalProportionOfSeriousIllness
: 
null,
personalRatioOfProvidentFund
: 
null,
proportionOfFertilityEnterprises
: 
null,
proportionOfIndustrialInjuryEnterprises
: 
null,
proportionOfMedicalEnterprises
: 
null,
proportionOfPensionEnterprises
: 
null,
proportionOfProvidentFundEnterprises
: 
null,
proportionOfSeriouslyIllEnterprises
: 
null,
proportionOfUnemployedEnterprises
: 
null,
providentFundAccount
: 
null,
providentFundBase
: 
null,
providentFundCity
: 
null,
providentFundEnterprises
: 
0,
providentFundIndividual
: 
0,
providentFundMonth
: 
null,
providentFundNotes
: 
null,
socialSecurity
: 
null,
socialSecurityBase
: 
null,
socialSecurityComputerNumber
: 
null,
socialSecurityEnterprise
: 
0,
socialSecurityIndividual
: 
0,
socialSecurityMonth
: 
null,
socialSecurityNotes
: 
null,
theHighestDegreeOfEducation
: 
"初中",
theNumberOfUnemployedIndividuals
: 
null,
timeOfEntry
: 
"2018-01-01T00:00:00.000+0000",
totalProvidentFund
: 
null,
twoLevelDepartment
: 
null,
unemployedEnterprise
: 
null,
unemployedIndividual
: 
null,
unemploymentEnterpriseBase
: 
null,
userId
: 
"1074238801402007552",
username
: 
"巴思慧",
workingCity
: 
null,
yearsMonth
: 
null
        }
    ]
})
/*请求数据*/
</script>

<style lang="scss" scoped>
.SecMonreport {
    height: 100%;
}

.box {
    background-color: #eaecef;
    padding: 15px;
}

.paddTit {
    padding: 0 20px 16px;
    font-weight: 900;
    color: #409eff;
    border-bottom: 3px solid #409eff;
}

.color {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid transparent;
    margin-right: 5px;
}
</style>
