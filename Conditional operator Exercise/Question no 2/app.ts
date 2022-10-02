// Question no 2
// Write a ts program to find maximum between three numbers using conditional operator.

var num1:string | null =prompt("Enter the value of num1")
var num2:string | null = prompt("Enter the value of num2")
var num3: string | null = prompt (" Enter the value of num3")

var number1:number=Number(num1)
var number2:number=Number(num2)
var number3:number=Number(num3)

var result=  (number1>number2) ? ((number1>number3) ? "number1 is greater" :"number3 is greater" ) : ((number2>number3)? "number2 is greater" : "number3 is greater "  )

console.log (result)