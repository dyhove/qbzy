
import http from "@/Untils/httpRequest"

export function getlist(data) {
  return http({
    url: http.apis(`/user/process/instance/${data.page}/${data.pageSize}`),
    method: "put"
  })
}


export function getDetail(data) {
  return http({
    url: http.apis(`/user/process/instance/${data}`),
    method: "get"
  })
}

export function process(data) {
  return http({
    url: http.apis(`/user/process/instance/tasks/${data}`),
    method: "get"
  })
}
