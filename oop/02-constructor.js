// function constructor
// new keyword is used to make new Object
// and this keyword is used to set constructor 
// properties to that Object.
// in constructor case :
// when object is created it automatically linked 
// to constructor prototype.
// and in object case:
// we manually set prototypes ,
// but in constructor case we make multiple 
// objects and they all are linked to same prototype
// inheriting the parent prototype properties
 function game(name,fps){
    this.name=name
    this.fps=fps
 }
 game.prototype.graphics=function(){
    return `${this.name} is played at max graphics`
 }
let freefire=new game("free fire","60fps")
// console.log(freefire)
let pubg=new game("pubg","120fps")
// console.log(pubg)
// console.log(pubg.graphics())

function error(id){
    if(!new.target){
        throw new error("must be created by new")
    }
    this.id=id
}
let myid=new error(23)
console.log(myid)
let my2ndid= error(45)
