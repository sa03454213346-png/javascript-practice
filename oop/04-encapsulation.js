class game{
    #fps
    constructor(name,fps){
        this.name=name
        this.fps=fps

    }

    get fps(){
        return this.#fps
    }
    set fps(fps){
        if (fps>0) {
            this.#fps=fps
        }else{
            console.log("fps not be negative")
        }
    }
}
let freefire=new game("free fire",120)
console.log(freefire.fps)
freefire.fps=78
console.log(freefire.fps)
freefire.fps=0
