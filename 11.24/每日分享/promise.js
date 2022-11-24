const fs = require('fs');
const wy = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('../article/万叶.md', (err, data) => {
            reject('这是错误的信息')
        });
    });
}
const mulan = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('../article/木兰.md', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
const chushi = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('../article/出师表.md', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// const p = (url) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }
// p('../article/万叶.md').then((res) => {
//     return console.log(res.toString());
// })
// p('../article/木兰.md').then((res) => {
//     return console.log(res.toString());
// })
// p('../article/出师表.md').then((res) => {
//     return console.log(res.toString());
// })

wy().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


// wy().then((res) => {
//     return console.log(res.toString());
// })
// mulan().then((res) => {
//     return console.log(res.toString());
// })
// chushi().then((res) => {
//     return console.log(res.toString());
// })

// wy().then((res) => {
//     return console.log(res.toString());
// }).then(() => {
//     return mulan().then((res) => {
//         return console.log(res.toString());
//     })
// }).then(() => {
//     return chushi().then((res) => {
//         return console.log(res.toString());
//     })
// })