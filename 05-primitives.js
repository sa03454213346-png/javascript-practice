let balance=120;
// changing primitive to non primitive by new keyword
console.log(typeof(balance));
let newbalance=new Number(120);
console.log(typeof(newbalance));

// template literals
let myself="sajjad"
let yourself='how'
let backticks=`got it`
let addvariable=`my name is ${myself}!`; //add variable
let addexpression=`my age is ${3*6}  !`//add expresssions
console.log(addvariable)
console.log(addexpression)

// Symbol
let sim1=Symbol("sajjad");
let sim2=Symbol("sajjad");
console.log(sim1);
console.log(sim2);
console.log(sim1===sim2)

