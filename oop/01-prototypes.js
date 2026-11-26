let mobile={
    cpu:"snapdragon"
}
let computer={
    GPU:"octacore"
}
Object.setPrototypeOf(computer,mobile)
console.log(computer.GPU)
console.log(computer.cpu)
console.log(Object.getPrototypeOf(computer))

// "computer jis ka prototype mobile tha, cpu us se inherit kiya. 
// Inshort: if you want to use other object's properties/functions, 
// just make it prototype."