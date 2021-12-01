/*
 * @Author: your name
 * @Date: 2021-12-02 00:35:24
 * @LastEditTime: 2021-12-02 00:35:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\高阶函数.js
 */
function fn1(a, b, callback) {
    console.log(a + b);
    // 执行完上面的 console.log() 语句之后，再执行下面这个 callback 函数。也就是说，这个 callback 函数是最后执行的。
    callback && callback();
}

fn1(10, 20, function () {
    console.log('我是最后执行的函数');
});

function fn1 () {
    let a = 20
  
    return function () {
      console.log(a)
    }
  }
  
  const foo = fn1() // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
  foo()
