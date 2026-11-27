const btn=document.querySelector("button")
btn.addEventListener("click",function(){
    if(btn.style.backgroundColor==="green"){
        btn.style.backgroundColor="red"
    }else{
        btn.style.backgroundColor="green"
    }
    let paragraph=document.querySelector("p")
    paragraph.textContent="hi dude changes are done"
})
const list=document.querySelector("ul")
const child=document.querySelector("li")
const change=document.querySelector(".hi")
change.addEventListener("click",function(){
    ul.firstElementChild.classList.add("highlight")
})
