// numbers conditions check
let num1=3;
let num2=5;

if(num1>num2){
  console.log("num 1 is greater")
}else{
    console.log("not greater number")
}
if (num1<num2) {
    console.log("number 2 is greater")  
}else {
console.log("not greater number")
}
if (num1!==num2) {
    console.log("they have different values")
}else {
    console.log("invalid operation")
}
if (num1===num2) {
    console.log("there are equal numbers")
}else {
    console.log("not equal numbers")
}
// boolean check
let iscoming=true;
if (iscoming) {
    console.log("yes he is coming")
}else{
    console.log("not coming")
}

// String check
let skill="c++"
if (typeof skill==="string") {
    console.log("yes this is string")
}else{
    console.log("no its not a string")
}

// arrays check
let items=[]
console.log(items.length)
if (items.length===0) {
    console.log("array is empty")
}else{
    console.log("array is not empty")
}

// elseif use
let marks=95;
if (marks===100) {
    console.log("superub")
}else if (marks>=95) {
    console.log("grade a+")
}
else if (marks>=85) {
    console.log("grade a")
}
else if (marks>=70) {
    console.log("grade b")
}
else if (marks>=60) {
    console.log("grade c")
}
else if (marks>=50) {
    console.log("grade d")
}else{
    console.log("fail")
}
