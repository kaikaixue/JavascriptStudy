/*
 * @Author: your name
 * @Date: 2021-11-28 19:00:49
 * @LastEditTime: 2021-11-28 20:52:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\数组常用方法.js
 */
// isArray(): 判断是否为数组
console.log(Array.isArray([1, 1]))

// toString(): 数组转换为字符串
console.log([1, 1].toString())
console.log(String([1, 1]))
console.log([1, 1].join(','))

// Array.from(): 将伪数组转换为真数组
const name = 'ssy'
console.log(Array.from(name))

// Array.of(): 创建数组
const arr = Array.of(1, 'abc', true)
console.log(arr)

// push()
var arr = ['王一', '王二', '王三']
var result1 = arr.push('王四') // 末尾插入一个元素
var result2 = arr.push('王五', '王六') // 末尾插入多个元素

console.log(result1) // 4
console.log(result2) // 6
console.log(JSON.stringify(arr)) // ["王一","王二","王三","王四","王五","王六"]

// pop()
var arr = ['王一', '王二', '王三']
var result1 = arr.pop()
console.log(result1) // 王三
console.log(JSON.stringify(arr)) // ["王一","王二"]

// unshift()
var arr = ['王一', '王二', '王三']
var result1 = arr.unshift('王四') // 最前面插入一个元素
var result2 = arr.unshift('王五', '王六') // 最前面插入多个元素
console.log(result1) // 4
console.log(result2) // 6
console.log(JSON.stringify(arr)) // ["王五","王六","王四","王一","王二","王三"]

// shift()
var arr = ['王一', '王二', '王三']
var result1 = arr.shift()
console.log(result1) // 王一
console.log(JSON.stringify(arr)) // ["王二","王三"]

// slice()
const arr = ['a', 'b', 'c', 'd', 'e', 'f']
const result1 = arr.slice() // 不加参数时，则获取所有的元素。相当于数组的整体赋值
const result2 = arr.slice(2) // 从第二个值开始提取，直到末尾
const result3 = arr.slice(-2) // 提取最后两个元素
const result4 = arr.slice(2, 4) // 提取从第二个到第四个之间的元素（不包括第四个元素）
const result5 = arr.slice(4, 2) // 空

console.log('arr:' + JSON.stringify(arr))
console.log('result1:' + JSON.stringify(result1))
console.log('result2:' + JSON.stringify(result2))
console.log('result3:' + JSON.stringify(result3))
console.log('result4:' + JSON.stringify(result4))
console.log('result5:' + JSON.stringify(result5))

// splice()
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
var result1 = arr1.splice(1) // 从第index为1的位置开始，删除元素
console.log('arr1：' + JSON.stringify(arr1))
console.log('result1：' + JSON.stringify(result1))

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
var result2 = arr2.splice(-2) // 删除最后两个元素
console.log('arr2：' + JSON.stringify(arr2))
console.log('result2：' + JSON.stringify(result2))

var arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
var result3 = arr3.splice(1, 3) // 从第index为1的位置开始删除元素,一共删除三个元素
console.log('arr3：' + JSON.stringify(arr3))
console.log('result3：' + JSON.stringify(result3))

var arr4 = ['a', 'b', 'c', 'd', 'e', 'f']
//从第index为1的位置开始删除元素,一共删除三个元素。并且在 index=1 的前面追加两个元素
var result4 = arr4.splice(1, 3, '松山院', 'vae')
console.log('arr4：' + JSON.stringify(arr4))
console.log('result4：' + JSON.stringify(result4))

// fill() 填充
// 创建一个长度为4的空数组，然后用 'f' 来填充这个空数组
console.log(Array(4).fill('f')) // ['f', 'f', 'f,' 'f']
// 将现有数组的每一个元素都进行填充
console.log(['a', 'b', 'c', 'd'].fill('f')) // ['f', 'f', 'f,' 'f']
// 指定位置进行填充
console.log(['a', 'b', 'c', 'd'].fill('f', 1, 3)) // ["a", "f", "f", "d"]

// concat()
const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
const arr3 = ['松山院', 'hello']
const result1 = arr1.concat(arr2)
const result2 = arr2.concat(arr1, arr3)
console.log('arr1 =' + JSON.stringify(arr1))    // [1,2,3]
console.log('arr2 =' + JSON.stringify(arr2))    // [a,b,c]
console.log('arr3 =' + JSON.stringify(arr3))    // [松山院，hello]
console.log('result1 =' + JSON.stringify(result1))  // [1,2,3,a,b,c]
console.log('result2 =' + JSON.stringify(result2))  // [a,b,c,1,2,3,松山院,hello]

// join()
var arr = ['a', 'b', 'c']
var result1 = arr.join() // 这里没有指定连接符，所以默认使用 , 作为连接符
var result2 = arr.join('-') // 使用指定的字符串作为连接符
console.log(typeof arr) // object
console.log(typeof result1) // string
console.log('arr =' + JSON.stringify(arr))
console.log('result1 =' + JSON.stringify(result1))
console.log('result2 =' + JSON.stringify(result2))

// split()
var str = 'Java,JavaEE,JavaScript'
const arr = str.split(',')
console.log(arr)

// reverse()
var arr = ['a', 'b', 'c', 'd', 'e', 'f']
var result = arr.reverse() // 将数组 arr 进行反转
console.log('arr =' + JSON.stringify(arr))
console.log('result =' + JSON.stringify(result))

// sort()方法
let arr1 = ['e', 'b', 'd', 'a', 'f', 'c']
let result = arr1.sort() // 将数组 arr1 进行排序
console.log('arr1 =' + JSON.stringify(arr1))    // 原数组改变
console.log('result =' + JSON.stringify(result))

// 带参sort
var arr = [5, 2, 11, 3, 4, 1]
// 自定义排序规则
var result = arr.sort(function (a, b) {
    // if (a > b) {
    //     return 1;
    // } else if (a < b) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return a - b
})

var result1 = arr.sort((a, b) => a - b)
console.log('arr = ' + JSON.stringify(arr))
console.log('reult = ' + JSON.stringify(result))

// indexOf() 和 lastIndexOf()
var arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c']
console.log(arr.indexOf('c'))   // 2
console.log(arr.lastIndexOf('c'))   // 6
console.log(arr.indexOf('c', 3)) // 6

// inclueds()
const arr = [11, 12, 13, 14, 15]
console.log(arr.includes(12)) // true
console.log(arr.includes(20)) // false
console.log(arr.includes(11, 1)) // false

// find()
let arr = [2, 3, 2, 5, 7, 6]
let result = arr.find((item, index) => {
    return item > 4 // 遍历数组arr，一旦发现有第一个元素大于4，就把这个元素返回
})
console.log(result) // 5

// every()
var arr1 = ['Java', 'JavaScript', 'CSS', 'HTML']
var bool1 = arr1.every(function (element, index, array) {
    if (element.length > 2) {
        return false
    }
    return true
})
console.log(bool1) // false。只要有一个元素的长度是超过两个字符的，就返回false

var arr2 = ['aa', 'bb', 'cc', 'dd']
var bool2 = arr2.every(function (element, index, array) {
    if (element.length > 2) {
        return false
    }
    return true
})
console.log(bool2) // true。因为每个元素的长度都是两个字符。

// forEach() 遍历
let myArr = ['王一', '王二', '王三']
myArr.forEach((item, index, arr) => {
    console.log('item:' + item)
    console.log('index:' + index)
    console.log('arr:' + JSON.stringify(arr))
    console.log('----------')
})

// map()
var arr1 = [1, 3, 6, 2, 5, 6]
var arr2 = arr1.map(function (item, index) {
    return item + 10 //让arr1中的每个元素加10
})
console.log(arr2)   // [11,13,16,12,15,16]

const arr1 = [
    { name: '松山院', age: '20' },
    { name: '张三', age: '32' },
]

// 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
const arr2 = arr1.map((item) => item.name)

// 将数组 arr1 中的 name、age这两个属性，改一下“键”的名字，存储到 arr3中
const arr3 = arr1.map((item) => ({
    myName: item.name,
    myAge: item.age,
})) // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中

console.log('arr1:' + JSON.stringify(arr1))
console.log('arr2:' + JSON.stringify(arr2))
console.log('arr3:' + JSON.stringify(arr3))

// filter()
let arr1 = [1, 3, 6, 2, 5, 6]
let arr2 = arr1.filter((item) => {
    if (item > 4) {
        return true // 将arr1中大于4的元素返回，组成新的数组
    }
    return false
})
console.log(JSON.stringify(arr1)) // [1,3,6,2,5,6]
console.log(JSON.stringify(arr2)) // [6,5,6]

const arr1 = [
    { name: '陈奕迅', type: '男星' },
    { name: '王菲', type: '女星' },
    { name: '邓紫棋', type: '女星' },
    { name: '周杰伦', type: '男星' },
    { name: '黄渤', type: '男星' },
    { name: '周迅', type: '女星' },
]
const arr2 = arr1.filter((item) => item.type == '女星') // 筛选出女星
console.log(JSON.stringify(arr2))

// reduce()
/**
 * 计算所有总和
 */
const arr = [2, 0, 1, 9, 6]
const total = arr.reduce((prev, item) => {
    return prev + item
})
console.log(total)  // 18
/**
 * 统计某个元素出现的次数
 */
function repeatCount (arr, value) {
    if (!arr || arr.length == 0) {
        return 0
    }
    return arr.reduce((totalCount, item) => {
        totalCount += item == value ? 1 : 0
        return totalCount
    }, 0)
}
let arr1 = [1, 2, 6, 5, 6, 1, 6]
console.log(repeatCount(arr1, 6))    // 3
/**
 * 求元素的最大值
 */
const arr2 = [2, 0, 1, 9, 6]
const maxValue = arr2.reduce((perv, item) => {
    return prev > item ? prev : item
})
console.log(maxValue)   // 9