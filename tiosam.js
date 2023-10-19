let ans1 = document.querySelector("#cars");
let inf2 = document.querySelector("#p2")
let inf1 = document.querySelector("#p1")
let inf = document.querySelector("#obj1")
let info2 = document.querySelector("#obj2")
let boton = document.querySelector("button")


boton.addEventListener("click", function(){
    if(ans1.value=="volvo"){
inf.style.display="block";
info2.style.display="none";
}
if(ans1.value=="saab"){
        inf.style.display="none";
        info2.style.display="block";
            }
})


