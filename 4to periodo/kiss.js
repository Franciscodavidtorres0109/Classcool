
let boton1= document.querySelector("#hola");
let boton2= document.querySelector("#adios")
let ans1 = document.querySelector("#rest");
let ans2 = document.querySelector("#rest2");
let ans3 = document.querySelector("#rest3");

let resp = document.querySelector("#r1")
let resp2 = document.querySelector("#r2")
let resp3 = document.querySelector("#r3")


boton1.addEventListener("click",function(){ 
    const answ1 = 3
    const answ2= 6
    const answ3 = 36
if(ans1.value == answ1)
    ans1.style.backgroundColor = "green";
 else {
    ans1.style.backgroundColor ="red";
    ans1.value =""
    ans1.placeholder = "incorrecto";
} 

if(ans2.value == answ2)
ans2.style.backgroundColor = "green";
else {
ans2.style.backgroundColor ="red";
ans2.value =""
ans2.placeholder = "incorrecto";
}

if(ans3.value == answ3)
ans3.style.backgroundColor = "green";
else {
ans3.style.backgroundColor ="red";
ans3.value =""
ans3.placeholder = "incorrecto";
} 
} )


boton2.addEventListener("click", function(){

    resp.innerHTML ="3"
    resp2.innerHTML ="6"
    resp3.innerHTML ="36"




})