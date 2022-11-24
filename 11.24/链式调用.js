const fs = require('fs');
const leaves = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./article/万叶.md', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
const mulan = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./article/木兰.md', (err, data) => {
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
        fs.readFile('./article/出师表.md', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}




leaves().then((res) => {
    return res.toString()
}).then((data) => {
    console.log(data);
    let resulet = mulan().then((res) => {
        console.log(res.toString());
        return res.toString()
    });
    console.log(resulet);
    return resulet + data;
}).then((data1) => {
    console.log(data1);
    chushi().then((res) => {
        console.log(res.toString());
    })
})