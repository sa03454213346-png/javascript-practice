// manually
// function intro(name,age){
//     this.name=name
//     this.age=age
// }
// intro.prototype.print=function(){
//     return console.log(`hi this is ${this.name},${this.age} years old!`)
// }
// let me=new intro("sajjad",18)
// me.print();
// by class
class intro{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    print(){
      console.log(`hi this is ${this.name},${this.age} years old!`)

    }
}
class extrainfo extends intro{
    constructor(name,age,hobby){
        super(name,age)
        this.hobby=hobby
    }
    print(){
         super.print()
         console.log(`${this.name} fav hobby is ${this.hobby}`)
    }
}
let person=new extrainfo("sajjad",18,"freefire")
person.print()
// person.extrainfoprint()
let dude=new extrainfo("hamad",20,"pubg")
// dude.print()
// dude.extrainfoprint()
