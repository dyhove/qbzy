import http from "@/Untils/httpRequest";
/**工资*/
/*获取工资模块头部数据*/
function getWagetop() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*获取工资模块表格数据*/
function getWagetable(data) {
  return http({
    url: http.apis("/salarys/list"),
    method: "post",
    data
  })
}
/*获取工资设置数据*/
function getsetting() {
  return http({
    url: http.apis("/salarys/settings"),
    method: "get"
  })
}

/*获取工资报表数据*/
function getreport(data) {
  return http({
    url: http.apis(`/salarys/reports/202003?yearMonth=${data.yearMonth}&opType=${data.opType}`),
    method: "get",
    data
  })
}
/*获取调薪数据*/
function getchangeSalary(data) {
  return http({
    url: http.apis(`/salarys/modify/${data}`),
    method: "get"
  })
}
export { getWagetop, getWagetable, getsetting, getreport, getchangeSalary }
