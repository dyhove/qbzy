/*首页接口*/
import http from "@/Untils/httpRequest"

export function myMessage() {
  return http({
    url: http.apis("/sys/profile"),
    method: "post"
  })
}

export function myMessageId() {
  return http({
    url: http.apis("/sys/user/1063705989926227968?id=1063705989926227968"),
    method: "get"
  })
}
