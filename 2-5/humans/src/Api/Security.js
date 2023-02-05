import http from "@/Untils/httpRequest";
export function Security(data) {
	return http(({
		url:http.apis("/company/department"),
		method: "get",
		data
	}))
}
export function Securitylist(data) {
	return http(({
		url:http.apis(`/social_securitys/list?page=${data.page}&size=${data.pageSize}&total=${data.total}`),
		method: "post",
		data
	}))
}
export function file(data) {
	return http(({
		url:http.apis(`/social_securitys/historys/2020/list`),
		method: "get",
		data
	}))
}
export function filelist(data) {
	return http(({
		url:http.apis(`social_securitys/historys/202001?month=202001&year=2020&opType=2`),
		method: "get",
		data
	}))
}

export function getDetail(data) {
  return http({
    url: http.apis("/social_securitys/payment_item/1084825908823904256"),
    method: "get",
		data
  })
}


export function getDetailinfo(data) {
  return http({
    url: http.apis(`/social_securitys/${data}`),
    method: "get"
  })
}
