/*Дано:*/
var str = "Условие или результат? ";            /* string */
var bool = 4 < 1;                               /* boolean */
var num = 3;                                    /* number */

console.log(str);
console.log(bool);
console.log(num);

/*1. Выполнить сложение различных типов (string + boolean, string + number, number + boolean)*/
var result1 = str + bool;                       /* string + boolean */
console.log(typeof str,' + ', typeof bool,'->', typeof result1,':', result1);
var result2 = str + num;                        /* string + number */
console.log(typeof str,' + ', typeof num ,' ->', typeof result2,':', result2);
var result3 = num + bool;                       /* number + boolean */
console.log(typeof num,' + ', typeof bool,'->', typeof result3,':', result3);

/*2.Выполнить умножение различных типов (string * boolean, string * number, number * boolean)*/
var result4 = str * bool;                       /* string * boolean */
console.log(typeof str,' * ', typeof bool,'->', typeof result4,':', result4);
var result5 = str * num;                        /* string * number */
console.log(typeof str,' * ', typeof num ,' ->', typeof result5,':', result5);
var result6 = num * bool;                       /* number * boolean */
console.log(typeof num,' * ', typeof bool,'->', typeof result6,':', result6);

/*3. Выполнить деление различных типов (string / boolean, string / number, number / boolean)*/
var result7 = str / bool;                       /* string / boolean */
console.log(typeof str,' / ', typeof bool,'->', typeof result7,':', result7);
var result8 = str / num;                        /* string / number */
console.log(typeof str,' / ', typeof num ,' ->', typeof result8,':', result8);
var result9 = num / bool;                       /* number / boolean */
console.log(typeof num,' / ', typeof bool,'->', typeof result9,':', result9);

/*Выполнить явное преобразование (number, string, boolean)*/
var result10 = String(num);                     /* number -> string */
console.log(typeof num ,' -> ', typeof result10,' :', result10);
var result11 = String(bool);                    /* boolean -> string */
console.log(typeof bool,'-> ', typeof result11,' :', result11);
var result12 = Number(str);                     /* string -> number */
console.log(typeof str ,' -> ', typeof result12,' :', result12);
var result13 = Number(bool);                    /* boolean -> number */
console.log(typeof bool,'-> ', typeof result13,' :', result13);
var result14 = Boolean(num);                    /* number -> boolean */
console.log(typeof num ,' -> ', typeof result14,':', result14);
var result15 = Boolean(str);                    /* number -> boolean */
console.log(typeof str ,' -> ', typeof result15,':', result15);