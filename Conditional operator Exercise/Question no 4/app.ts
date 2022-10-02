//  Question no 4
//  Write a ts program to check whether year is leap year or not using conditional operator.

var num1:string | null =prompt("Enter the value of num1")
var year:number = Number(num1)

var result = (year %  4 == 0) ? "Year is leap year" : " Year is not leap year "

console.log(result)