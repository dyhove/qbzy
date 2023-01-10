/*封装接口*/
import request from '@/Utils/request'

export function login(data: object) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
