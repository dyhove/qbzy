// 1.引入fs模块
const fs = require('fs')
fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
// 3.使用promise封装
const P = new Promise(function (resolve, reject) {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
P.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})