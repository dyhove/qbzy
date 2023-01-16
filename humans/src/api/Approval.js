/*审批接口*/
import http from "@/Untils/httpRequest"

export function getApproval(data) {
  return http({
    url: http.apis(`/user/process/instance/${data.page}/${data.pageSize}`),
    method: "put",
    data
  })
}
