/*
 * @Author: your name
 * @Date: 2021-12-02 19:18:47
 * @LastEditTime: 2021-12-02 19:29:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\对象的基本操作.js
 */
var obj = new Object()

// 添加属性
obj.name = 'ssy'
obj.gender = '男'
obj.age = 18
console.log(JSON.stringify(obj))

console.log(obj.gender)
console.log(obj.color)

// 修改属性值
obj.gender = '女'
console.log(JSON.stringify(obj))
// 删除属性值
delete obj.age
console.log(JSON.stringify(obj))
// 判断是否具有属性
console.log('name' in obj)

// for of 遍历数组
let arr1 = [2, 6, 8, 5]
for (let value of arr1) {
    console.log(value)
}

// for in 遍历对象
const ssy = {
    name: 'ssy',
    age: 20,
    gender: '男',
    address: 'NanJing',
    sayHi: function () {
        console.log(this.name)
    },
}
// 遍历对象中的属性            
for (const key in ssy) {
    console.log('属性名:' + key)
    console.log('属性值:' + ssy[key])
}