import http from '@/Untils/httpRequest'


/*角色管理接口*/
export function Setup(data) {
  return http({
    url: http.apis("/sys/role?page=1&pagesize=10&total=0"),
    method: "get",
    data
  })
}

/*添加角色接口*/
export function AddSetup(data) {
  return http({
    url: http.apis("/sys/role"),
    method: "post",
    data
  })
}


/*编辑角色接口*/
export function Editrole(data) {
  return http({
    url: http.apis(`/sys/role/${data}`),
    method: "get",
    data
  })
}

/*公司信息接口*/
export function company(data) {
  return http({
    url: http.apis("/company/1"),
    method: "get",
    data
  })
}

/*删除角色接口*/
export function Delrole(data) {
	return http({
		url: http.apis(`/sys/role/${data}`),
		method: "delete"
	})
}
