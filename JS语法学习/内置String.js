/*
 * @Author: your name
 * @Date: 2021-11-27 20:43:12
 * @LastEditTime: 2021-11-27 22:18:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\内置String.js
 */
const str = 'abcdea'

// 给字符查索引(索引值为0,说明字符串以查询的参数为开头)
console.log(str.indexOf('c'))
console.log(str.lastIndexOf('c'))

console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))

// 获取字符串中指定内容的索引（参数里一般是正则）
const name = 'ziguyilai'
console.log(name.search('yi')) // 4
console.log(name.search(/yi/i)) // 4

// 字符串中是否包含指定的内容
const name1 = 'ziguyilai'

console.log(name1.includes('yi'))   // true
console.log(name1.includes('hello')) // false
console.log(name1.includes('yi', 7)) // false

// 字符串是否以指定的内容开头
const name2 = 'abcdefg'

console.log(name2.startsWith('a')) // true
console.log(name2.startsWith('b')) // false

// 因为指定了起始位置为3，所以是在 defg 这个字符串中检索。
console.log(name2.startsWith('d', 3)) // true
console.log(name2.startsWith('c', 3)) // false

// 字符串是否以指定的内容结尾

console.log(name2.endsWith('g')) // true
console.log(name2.endsWith('f')) // false

// 因为指定了截止位置为3，所以是在 abc 这个长度为3字符串中检索
console.log(name2.endsWith('c', 3)) // true
console.log(name2.endsWith('d', 3)) // false

// String.fromCharCode()：根据字符的 Unicode 编码获取字符。
var result1 = String.fromCharCode(72)
var result2 = String.fromCharCode(20013)

console.log(result1) // H
console.log(result2) // 中

// concat()
var str1 = 'hello'
var str2 = 'world'

var result = str1.concat(str2)
console.log(result) 	// 打印结果：helloworld

// split()：字符串转换为数组
var str = 'kai, dao, tu, mi' // 用逗号隔开的字符串
var array = str.split(',') // 将字符串 str 拆分成数组，通过逗号来拆分

console.log(array) // 打印结果是数组：["kai", " dao", " tu", " mi"]

// replace()方法：替换
var str2 = 'Today is fine day,today is fine day !'
console.log(str2)

console.log(str2.replace('today', 'tomorrow'))   //只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')) //这里用到了正则，才能替换所有的today

// repeat()：重复字符串
const name3 = 'helloworld'

console.log(name3.repeat(2)) // 打印内容：helloworldhelloworld

// 号码加 * 号
const telephone = '18014698813'
const mix_telephone = telephone.slice(0, -4) + '*'.repeat(4) // 模糊电话号码的后四位

console.log(telephone)      // 18014698813
console.log(mix_telephone) // 1801469****

// trim()：去除字符串前后的空白
let str = '   a   b   c   ';
console.log(str);
console.log(str.length);

console.log(str.trim());
console.log(str.trim().length);

// 大小写转换
var str = 'abcdEFG';

//转换成小写
console.log(str.toLowerCase());
//转换成大写
console.log(str.toUpperCase());

// html 方法
var str = '你好';

console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());