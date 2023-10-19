//CREO UNA VARIABLE
let crojo = document.getElementById("rojo");
let cazul = document.getElementById("azul");
let parrfo1 =  document.getElementById("p1");
let conteorojo = document.getElementById("conteoR");
let conteoazul = document.getElementById("conteoA");


let contarazules = 0
let contarrojo = 0



crojo.addEventListener("click", function (){
parrfo1.innerHTML = "hiciste click sobre el crirculo rojo"
contarrojo++

conteorojo.innerHTML = "hiciste click sobre el crirculo rojo:" + contarrojo;
}
)
cazul.addEventListener("click", function (){
    parrfo1.innerHTML = "hiciste click sobre el crirculo azul"
    }
    )
    

let input = document.querySelector("input");
let btnvalidar = document.querySelector("button")



let intentos = 0 ;


btnvalidar.addEventListener("click",function(){
    const password = 12345 
    intentos++ 
   

    if(input.value == password){
        input.style.backgroundColor = "green"
    } else {
        input.value = ""
        input.style.backgroundColor ="red"
        input.placeholder = "incorrecto"
    } 
    if(intentos >=5){
input.placeholder ="demasiados intentos"
input.readOnly = true;

    }
})

