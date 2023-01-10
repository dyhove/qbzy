/*封装接口*/
import request from '@/Utils/request'

export function permission(data: object) {
  return request({
    url: '/sys/permission',
    method: 'get',
    data
  })
}
