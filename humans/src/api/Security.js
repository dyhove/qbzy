/*社保接口*/
import http from "@/Untils/httpRequest"

/*获取头部数据*/
export function getSectop() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*获取表格数据*/
export function getSecurity(data) {
  return http({
    url: http.apis("/social_securitys/list"),
    method: "post",
    data
  })
}
