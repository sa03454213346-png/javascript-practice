console.log("js linked")
console.log(screen.width)
console.log(navigator.language);   
console.log(navigator.onLine);     
console.log(location.href);        
console.log(location.hostname);  
console.log(document)  
const heading=document.querySelector("h1")
heading.textContent="my name is sajjad"
heading.style.color="green"
heading.style.font="70px"
heading.style.backgroundColor="red"
const btn=document.querySelector("button")
btn.addEventListener("click",function (params) {
    if (btn.style.backgroundColor === "green") {
        btn.style.backgroundColor="blue"
    }else{
        btn.style.backgroundColor="green"
    }
   
    btn.style.color="brown"
    
    
})