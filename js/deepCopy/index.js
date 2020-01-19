// let a = 'wn' // 赋值操作 基础数据类型为深拷贝
// let b = a
// a = '蜗牛'
// console.log(b)
// let a = {
//     name: 'wn'
// }
// let b = a
// a.name = 'woniu' // 赋值操作 引用类型为浅拷贝
// console.log(b)

// let a2 = {
//     age: '18'
// }

// let c = Object.assign(a, a2) // 拷贝的数据类型为基础数据类型时，为深拷贝，当为引用数据类型时，为浅拷贝
// console.log(c)

// let a = [0,'1',[2,3]]
// let b = a.slice(1)
// console.log(b)
// console.log(a)

// let a = {
//     name: 'wn',
//     book: {
//         title: '1',
//         price: '45'
//     }
// }
// let b = JSON.parse(JSON.stringify(a)) // deepcopy,将a转换为字符串，再将字符转为json

function cloneDeep (source) {
    if (typeof source !== 'object') {
        return source
    }
    var target = Array.isArray(source) ? [] : {} // 判断source为数组还是对象类型
    for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep(source[key])
            }
            else
                target[key] = source[key] // 添加key:value
        }
    }
    return target
}


function cloneShallow (source) {
    var target = {}
    for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key] // 添加key:value
        }
    }
    return target
}

Object.prototype.sex = 'boy'
let a = {
    name: 'wn',
    book: {
        title: '1',
        price: '45'
    }
}
let b = cloneShallow(a)
console.log(b)

let b2 = cloneDeep(a)
a['book']['title'] = '2'
console.log(b2)
console.log(a)

function deepCopy2(x) {
    const root = {}
    //栈
    const  loopList = [
        {
            parent: root,
            key: undefined,
            data: x
        }]

        while (loopList.length) {
            //广度优先
            const node = loopList.pop()
            const parent = node.parent
            const key = node.key
            const data = node.data

            let res = parent // {}
            //初始化复制目标，key为undefined 拷贝到父元素，否则拷贝到子元素
            if (typeof key !== 'undefined') {
                res = parent[key] = {}
            }
            for (let k in data) {
                if (data.hasOwnProperty(k)) {
                    if (typeof data[k] === 'object') {
                        //下一次循环
                        loopList.push({
                            parent: res,
                            key: k,
                            data: data[k]
                        })
                    }
                    else
                        res[k] = data[k]
                }
            }
        }
        return root
}