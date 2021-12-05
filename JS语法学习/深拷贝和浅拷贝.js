/*
 * @Author: your name
 * @Date: 2021-12-05 10:10:42
 * @LastEditTime: 2021-12-05 10:34:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\深拷贝和浅拷贝.js
 */
const obj1 = {
    name: 'ssy',
    age: 20,
    info: {
        desc: '好好学习'
    }
}

const obj2 = {}
for (let key in obj1) {
    obj2[key] = obj1[key]
}

console.log('obj2:' + JSON.stringify(obj2))

obj1.info.desc = "天天向上"
console.log('obj2:' + JSON.stringify(obj2))

// Object.assign()方法
const obj3 = {
    name: 'ssy',
    age: 20,
    info: {
        desc: 'hello'
    }
}

// 浅拷贝：把obj3拷贝给obj4。如果obj1只有一层数据，那么，obj1和obj2互不影响
const obj4 = Object.assign({}, obj3)
console.log('obj4:' + JSON.stringify(obj4))

obj3.info.desc = 'world'
console.log('obj4:' + JSON.stringify(obj4))

const myObj = {
    name: 'ssy',
    age: 20,
}

// 1.浅拷贝：把 myObj 拷贝给 obj5
const obj5 = {}
Object.assign(obj5, myObj)

// 2.浅拷贝：把 myObj 拷贝给 obj6
const obj6 = Object.assign({}, myObj)

// 3.浅拷贝：把 myObj 拷贝给 obj31。这里的 obj31 和 obj32 是等价的，指向了同一个内存地址
const obj7 = {}
const obj8 = Object.assign(obj7, myObj)

let obj9 = { name: 'ssy', age: 20 }
let obj10 = { city: 'nanjing', age: 30 }
let obj11 = {}

Object.assign(obj9, obj10, obj11) // 将 obj1、obj2的内容赋值给 obj3
console.log(obj11) // {name: "ssy", age: 30, city: "nanjing"}

const obj12 = {
    name: 'ssy',
    age: 20,
    desc: 'hello world'
}

const obj13 = {
    name: '张三',
    gender: '男'
}

// 浅拷贝：obj12赋值给obj13.返回值是obj13
Object.assign(obj13, obj12)
console.log(JSON.stringify(obj13))
// 原属性会被覆盖

// 深拷贝
let obj14 = {
    name: 'ssy',
    age: 28,
    info: {
        dese: 'hello'
    },
    color: ['red', 'blue', 'green']
}

let obj15 = {}
deepCopy(obj15, obj14)
console.log(obj15)
obj1.info.desc = 'GitHub'
console.log(obj2)


function deepCopy (newObj, oldObj) {
    for (let key in oldObj) {
        let item = oldObj[key]
        if (item instanceof Array) {
            newObj[key] = []
            deepCopy(newObj[key], item)
        } else if (item instanceof Object) {
            newObj[key] = {}
            deepCopy(newObj[key], item)
        } else {
            newObj[key] = item
        }
    }
}