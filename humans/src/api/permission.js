/*权限管理接口*/
import http from "@/Untils/httpRequest"

/*角色管理接口*/
export function permission(data) {
  return http({
    url: http.apis("/sys/permission"),
    method: "get",
    data
  })
}
