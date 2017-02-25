/**
 * Tasks Title is '正则表达式入门'
 * 1，编写一个判断给定数字是否为手机号码的正则表达式
 * 2，编写一个判断输入的字符串是否有相邻重复单词的正则表达式
 */

var re1 = new RegExp('^1[3,4,5,7,8]\\d{9}$');
var re2 = /(\b\w+\b)\s(?=\1)/;

console.log(re1.test('18812011232'));
console.log(re1.test('18812312'));
console.log(re1.test('12345678909'));

console.log(re2.test('foo foo bar'));
console.log(re2.test('foo bar foo'));
console.log(re2.test('foo  barbar bar'));
