// 当前时间渲染
function geTtime() {
    var time = document.querySelector('.time')
    // time.innerHTML = ''
    var str = new Date().toLocaleString().toLocaleString().split('/').join('-')
    if (str.length < 19) {
        str = insertStr(str, 8, '0')
    } else {

    }
    time.innerHTML = str

}
// 时间
setInterval(() => {
    geTtime()
}, 1000)

function insertStr(source, start, newStr) {
    return source.slice(0, start) + newStr + source.slice(start)
}


var list = [{
        name: "李妍",
        sex: 0
    },
    {
        name: "张世权",
        sex: 1
    },
    {
        name: "王龙翔",
        sex: 1
    },
    {
        name: "徐婉颖",
        sex: 0
    },
    {
        name: "付高聪",
        sex: 1
    },
    {
        name: "吴倩",
        sex: 0
    },
    {
        name: "张立",
        sex: 1
    },
    {
        name: "巴钦",
        sex: 1
    },
    {
        name: "章奥博",
        sex: 1
    },
    {
        name: "孙铭",
        sex: 1
    },
    {
        name: "程怀博",
        sex: 1
    },
    {
        name: "张建雨",
        sex: 1
    },
    {
        name: "李宏恩",
        sex: 1
    },
    {
        name: "王伟宸",
        sex: 1
    },
    {
        name: "李宏恩",
        sex: 1
    },
    {
        name: "孙旭瑶",
        sex: 0
    },
    {
        name: "杨志豪",
        sex: 1
    },
    {
        name: "高鹏亚",
        sex: 1
    },
    {
        name: "宋海宇",
        sex: 1
    },
    {
        name: "宋增杰",
        sex: 1
    },
    {
        name: "侯建荞",
        sex: 0
    },
    {
        name: "薛翔元",
        sex: 1
    },
    {
        name: "郝嫚嫚",
        sex: 0
    },
    {
        name: "代伊涵",
        sex: 1
    },
    {
        name: "邓林柯",
        sex: 1
    },
    {
        name: "章涵语",
        sex: 1
    },
    {
        name: "郑锋",
        sex: 1
    },
    {
        name: "江萌洋",
        sex: 0
    },
    {
        name: "张宗耀",
        sex: 1
    },
    {
        name: "周璇",
        sex: 0
    },
    {
        name: "刘艺",
        sex: 0
    },
    {
        name: "韩雨泽",
        sex: 1
    },
]

//   改变数组顺序
function suijinum(count) {
    var a = new Array();
    for (var i = 0; i < count.length; i++) {
        a[i] = count[i];

    }
    a.sort(function () {
        return 0.5 - Math.random();
    })
    return a;

}
// console.log(suijinum(list)[0]);
// 获取ul
var ul = document.querySelector('.ul')
// 获取h2
var h2 = document.querySelector('h2')
var music = document.querySelector('.music')
// 事件委托 选择天选之子
ul.onclick = function (e) {
    if (e.target.className == 'ul') return

    if (e.target.className == 'solo') {
        if (e.target.innerHTML == '单人点名') {
            select(e, '停止')
        } else {
            h2.innerHTML = `${suijinum(list)[0].name}`
            select(e, '单人点名')

        }

    }
    if (e.target.className == 'double') {
        if (e.target.innerHTML == '双人点名') {
            select(e, '停止')
        } else {
            h2.innerHTML = `${suijinum(list)[0].name}  ${suijinum(list)[1].name}`
            select(e, '双人点名')

        }

    }
    if (e.target.className == 'man') {
        if (e.target.innerHTML == '男生点名') {
            select(e, '停止')
        } else {
            var arr = list.filter(item => item.sex == 1)
            h2.innerHTML = `${suijinum(arr)[0].name}`
            select(e, '男生点名')

        }

    }
    if (e.target.className == 'girl') {
        if (e.target.innerHTML == '女生点名') {
            select(e, '停止')
        } else {
            var arr = list.filter(item => item.sex == 0)
            h2.innerHTML = `${suijinum(arr)[0].name}`
            select(e, '女生点名')

        }
    }
}
// 显示那几个文字
function select(e, a) {
    if (a != '停止') {
        music.pause()
    } else {
        // music.autostart = 'false'
        music.play()
    }
    e.target.innerHTML = a
}