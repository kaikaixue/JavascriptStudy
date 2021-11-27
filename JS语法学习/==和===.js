/*
 * @Author: your name
 * @Date: 2021-11-27 20:05:46
 * @LastEditTime: 2021-11-27 20:09:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\==和===.js
 */
// 判断字符串是否相同
console.log("我爱你中国" == "我爱你中国")  // true

// 隐式转化，转为相同类型进行比较
console.log("6" == 6)		// true，字符串"6"会先转换为数字6，然后再进行比较
console.log(true == "1") // true
console.log(0 == -0)     // true
console.log(null == 0)   // false

// undefined 衍生自 null，所以这两个值做相等判断时，会返回true
console.log(undefined == null)  // true

// NaN不和任何值相等，包括它本身。
console.log(NaN == NaN)  // false
console.log(NaN === NaN) // false

// ===全等在比较时，不会做类型转换
console.log("6" === 6);		// false
console.log(6 === 6);	  	// true