import http from "@/untils/httpRequest"
/**获取用户列表信息 */
export const GetUser = (params) => {
  return http.send("/users", params).then((res) => {
    return res
  })
}
/**搜索接口 */
export const GetSearchUser = (params) => {
  return http.send("/users", params).then((res) => {
    return res
  })
}
/**添加用户 */
export const SetUser = (data) => {
  // console.log(data)
  return http.send("/users", data, "post").then((res) => {
    return res
  })
}
/**编辑用户 */
// ``
export const UpdateUser = (data) => {
  return http.send(`/users/${data.id}`, data, "put").then((res) => {
    return res
  })
}
/**删除用户 */
export const DelUser = (data) => {
  console.log(data)
  return http.send(`/users/${data.id}`, data, "delete").then((res) => {
    return res
  })
}
/**修改用户角色 */
export const UpdateUserAss = (obj) => {
  return http.send("/users", obj, "put").then((res) => {
    return res
  })
}
/**获取角色列表 */
export const GetRoles = () => {
  return http.send("/roles", "get").then((res) => {
    return res
  })
}
/**添加角色 */
export const AddRoles = (data) => {
  return http.send("/roles", data, "post").then((res) => {
    return res
  })
}
/**删除角色 */
export const DelRoles = (id) => {
  return http.send("/roles", id, "delete").then((res) => {
    return res
  })
}
/**编辑角色 */
export const EditRoles = (data) => {
  return http.send("/roles", data, "put").then((res) => {
    return res
  })
}
/**权限树状图 */
export const GetTree = () => {
  return http.send("/tree").then((res) => {
    return res
  })
}
/**角色授权 */
export const SetRolse = (data) => {
  return http.send("/roles", data, "post").then((res) => {
    return res
  })
}
/**角色授权 */
export const DeleteRolse = (data) => {
  return http.send("/roles", data, "delete").then((res) => {
    return res
  })
}

/**商品分类数据 */
export const GetShopType = (params) => {
  return http.send("/categories", params).then((res) => {
    return res
  })
}
/**商品分类数据添加 */
export const AddShopType = (params) => {
  return http.send("/categories", params, "post").then((res) => {
    return res
  })
}
/**商品分类数据编辑 */
export const EditShopType = (data) => {
  return http.send("/categories", data, "post").then((res) => {
    return res
  })
}
/**商品分类数据编辑 */
export const DelShopType = (data) => {
  return http.send("/categories", data, "delete").then((res) => {
    return res
  })
}
/**商品列表数据 */
export const GetShoplist = (params) => {
  return http.send("/goods", params).then((res) => {
    return res
  })
}
/**添加商品数据 */
export const SetShopType = (data) => {
  return http.send("/goods", data, "post").then((res) => {
    return res
  })
}
/**删除商品 */
export const DelShop = (id) => {
  return http.send("/goods", id, "delete").then((res) => {
    return res
  })
}
/**订单管理 */
export const GetOrders = (data) => {
  return http.send("/orders", data).then((res) => {
    return res
  })
}
