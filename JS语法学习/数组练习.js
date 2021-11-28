/*
 * @Author: your name
 * @Date: 2021-11-28 20:53:19
 * @LastEditTime: 2021-11-28 21:13:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\数组练习.js
 */

/**
 * splice()练习，数组去重
 */
// 创建一个数组
var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(j, 1)
            j--
        }
    }
}
console.log(arr)

/**
 *join() 练习
 */
var arr1 = ['流行', '抒情', '民谣']
console.log(arr.join('|'))

/**
 * reverse()练习
 */
var arr2 = [1, 2, 3, 4, 5]
console.log(arr.reverse())

// 求数组中每一个元素出现的次数
var arr3 = ["a", "b", "c", "a", "b", "a"]
var json = {}
for (let i = 0; i < arr3.length; i++) {
    var counts = json[arr3[i]]
    if (counts) {
        json[arr3[i]] += 1
    } else {
        json[arr3[i]] = 1
    }
}
console.log(json)

// 数组去重
var arr = [1, 2, 3, 4, 5, 2, 3, 4]
function fn (array) {
    var newArr = []
    for (let i = 0; i < array.length; i++) {
        // 开闭原则
        var bool = true
        for (var j = 0; j < newArr.length; j++) {
            if (array[i] === newArr[j]) {
                bool = false
            }
        }
        if (bool) {
            newArr[newArr.length] = array[i]
        }
    }
    return newArr
}
var newArr = fn(arr)
console.log(newArr)