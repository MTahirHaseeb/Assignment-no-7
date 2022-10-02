// Question no 1
// Write a ts program to find maximum between two number using conditional operator.

var num1:string | null =prompt("Enter the value of num1")
var num2:string | null = prompt("Enter the value of num2")

var number1:number=Number(num1)
var number2:number=Number(num2)

var result= (number1 > number2 )? " Number1 is maximum" : " number2 is maximum"
console.log(result)

