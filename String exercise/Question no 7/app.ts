//  Question no 7
//  write a ts program to toggle case of each charactorof a string.

var str1:string = "hELLO wELCOME tO sYLANI"
var finalStr:string = str1.split('').map((c:any) =>
c==c.toUppereCasae()?
c.toLowerCase():c.toUpperCase()).join('')

console.log(finalStr)