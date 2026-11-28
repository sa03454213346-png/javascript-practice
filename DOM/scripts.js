// example 1
const ph=document.querySelector("#paragraph")
const bt=document.querySelector("#btn")
bt.addEventListener("click",function(){
    if(bt.style.backgroundColor==="green"){
        bt.style.backgroundColor="yellow"
    }else{
        bt.style.backgroundColor="green"
    }
    ph.textContent="hello from sajjad";
}
)
// example 2
const unorderlist=document.querySelector("#unorder")
const button=document.querySelector("#btnn")
button.addEventListener("click", (params) => {
    unorderlist.firstElementChild.classList.add("highlight")
    
})
// example 3
const sp=document.querySelector("#l")
const btn=document.querySelector("#b")
btn.addEventListener("click",() =>{
    sp.textContent="epresso"
    sp.classList.add("change")
})
// example 4
const ul=document.querySelector("#ad")
const b1=document.querySelector("#addbtn")
b1.addEventListener("click",() => {
    if (b1.style.backgroundColor === "purple") {
        b1.style.backgroundColor="green"
    }else{
        b1.style.backgroundColor="purple"
    }
    const newitem=document.createElement("li")
    newitem.textContent="chai"
    ul.appendChild(newitem)
}
)
// example 5
const faw=document.querySelector("#a")
const foo=document.querySelector("#addbt")
foo.addEventListener("click",() =>{
    faw.lastElementChild.remove()
})
// example 6
const alrt=document.querySelector("#click")
alrt.addEventListener("mousemove",() => {
   alert("hello from sajjad")
})
// example 7
// event delgeation me parent pe  listner lagate he 
// or parent apne childs ke event un ki trf se handle 
// krta he hm dekh sakte he konsa element select hoa 
// use modiffy kr sakte he or new items ke liye bi 
// parent listner kam ata he ni to hr item ko 
// listner bnana prta or use modify krna prta 
// us case me hme e ki zrorrt nhi hote delegation
//  me e chahiye take pta chle konsa element target hoa
const tealistner=document.querySelector("#teatype")
tealistner.addEventListener("click",(e)=>{
  if (e.target.matches(".tea")) {
    alert(e.target.textContent)
  }
})
// example 8
const select=document.querySelector("#selectform")
const btnselect=document.querySelector("#selectbtn")
const para=document.querySelector("#pargraph")
const hh=document.querySelector("#h")
select.addEventListener("submit", (e)=>{
    e.preventDefault()
    const text=hh.value
    para.textContent=text
    
})
// example 9
const pa=document.querySelector("#mm")
document.addEventListener("DOMContentLoaded",()=>{
    pa.textContent="dom ready"
    console.log("event fire")
})
// example 10
const lit=document.querySelector("#ss")
const lt=document.querySelector("#pp")
lt.addEventListener("click",()=>{
    lit.classList.toggle("active")
})