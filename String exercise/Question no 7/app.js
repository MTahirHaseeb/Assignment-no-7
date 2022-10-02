//  Question no 7
//  write a ts program to toggle case of each charactorof a string.
var str1 = "hELLO wELCOME tO sYLANI";
var finalStr = str1.split('').map(function (c) {
    return c == c.toUppereCasae() ?
        c.toLowerCase() : c.toUpperCase();
}).join('');
console.log(finalStr);
