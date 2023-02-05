/*考勤接口*/
import http from "@/Untils/httpRequest"

/*考勤头部数据*/
export function attlist() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*考勤表格数据*/
export function atttable(data) {
  return http({
    url: http.apis(`/attendances?page=${data.page}&pagesize=${data.pagesize}&total=${data.total}`),
    method: "get"
  })
}

/*考勤报表数据*/
export function Atrtgetreport() {
  return http({
    url: http.apis("/attendances/reports"),
    method: "get"
  })
}

/*考勤设置数据*/
export function Attgetsetup(data) {
  return http({
    url: http.apis("/cfg/atte/item"),
    method: "post",
    data
  })
}
