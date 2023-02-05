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

/*添加接口*/
export function Addpermission(data) {
  return http({
    url: http.apis("/sys/permission"),
    method: "post",
    data
  })
}

/*编辑接口*/
export function Editpermission(data) {
  return http({
    url: http.apis(`/sys/permission/${data}`),
    method: "PUT"
  })
}

/*删除接口*/
export function delpermission(data) {
  return http({
    url: http.apis(`/sys/permission/${data}`),
    method: "DELETE"
  })
}
