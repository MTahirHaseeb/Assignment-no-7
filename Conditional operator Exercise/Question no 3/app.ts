//  Question no 3
// Write a ts program to check whether a number is even or odd using conditional operator.


var num1:string | null =prompt("Enter the value of num1")


var number1:number=Number(num1)


var result = (number1 % 2 ==0) ? "Number1 is even " : " Number1 is odd"
console.log(result)