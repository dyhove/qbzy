import http from "@/Untils/httpRequest";

function getStructure() {
  return http({
    url: http.apis("/company/department"),
    method: "get"
  })
}

/*组织架构添加接口*/
function AddStructure(data) {
  return http({
    url: http.apis("/company/department"),
    method: "post",
    data
  })
}

/*组织架构编辑接口*/
function EditStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "get"
  })
}

/*组织架构确定编辑接口*/
function EditOkStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "put"
  })
}

/*组织架构删除接口*/
function delStructure(data) {
  return http({
    url: http.apis(`/company/department/${data}`),
    method: "DELETE"
  })
}
export { getStructure, AddStructure, EditStructure, EditOkStructure, delStructure }
