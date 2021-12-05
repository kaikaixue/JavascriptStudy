/*
 * @Author: your name
 * @Date: 2021-12-05 14:27:42
 * @LastEditTime: 2021-12-05 14:31:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\面向对象编程.js
 */

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...')
    }
}

var xiaoming = {
    name: '小明'
}

xiaoming.__proto__ = Student
xiaoming.run()

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...')
    }
}

xiaoming.__proto__ = Bird
xiaoming.fly()

function createStudent (name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student)
    // 初始化新对象:
    s.name = name
    return s
}

xiaoming = createStudent('小明')
xiaoming.run()
console.log(xiaoming.__proto__ === Student)