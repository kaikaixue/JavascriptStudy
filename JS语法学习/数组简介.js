/*
 * @Author: your name
 * @Date: 2021-11-28 15:19:44
 * @LastEditTime: 2021-11-28 15:38:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\数组简介.js
 */

// 数组逆置
var arr = [1, 2, 3, 4, 5]
var newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1]
}
console.log(newArr)

// 冒泡排序
var arr1 = [1, 3, 5, 2, 4]
for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - 1 - i; j++) {
        if (arr1[j] > arr1[j + 1]) {
            let temp = arr1[j]
            arr1[j] = arr1[j + 1]
            arr1[j + 1] = temp
        }
    }
}
console.log(arr1)

