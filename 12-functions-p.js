// passing function as argument to another function,
// and the other function parameter name become the function name.
// function mul(a,b) {
//  console.log(a*b);
// }
// function copy(multiplying) {
//     multiplying(4,5);
//     multiplying(4,5);
//     multiplying(4,6);
// }
// copy(mul);
// Closure = aisa function jo apne 
// outer function ke variables ko YAAD rakhta hai, 
// chahe outer function khatam ho jaye.
function data(name,weight){
    return function two(height){
        return ` data ${name},${weight},${height}`
    }
}

let one=data("sajjad",57);
let totaldata=one("6'1");
console.log(totaldata);

function add(a,b) {
    console.log(`sum is ${a+b}`);
}

function level(adding) {
    adding(2,3);
}
level(add);

function me(name) {
    return function me1(age) {
        return `about me ${name},${age}`
    }
}
let me2=me("sajjad")
let info=me2(23)
console.log(info)