// Contrato Arriendo
// info1=prompt("Ingrese la direccion")
// info2=prompt("Ingrese el numero de departamento")
// info3=prompt("Ingrese la comuna")

// const addressSpan=document.querySelector(".direccion")
// const deptonumberSpan=document.querySelector(".numdepto")
// const countySpan=document.querySelector(".comuna")

// addressSpan.innerHTML=info1
// deptonumberSpan.innerHTML=info2
// countySpan.innerHTML=info3

// Modificar estilos
// parrafo = document.querySelector("p")
// parrafo.style.fontStyle="italic"

// imagenradius = document.querySelector("img")
// estilo = prompt("Ingresa el valor del border-radius deseado")
// const styleImg = document.querySelector("img")
// styleImg.style.borderRadius = estilo

// const imagenPrincipal = document.querySelector("img")
// imagenPrincipal.style.borderRadius = "50%"
// imagenPrincipal.classList.add("radius")
// imagenPrincipal.classList.toggle("radius")

const btn = document.querySelector(".btn") //declaro el boton
// const imagenPrincipal = document.querySelector("img") //declaro la imagen
// const title=document.querySelector(".title-iguana")
const result = document.querySelector("#result")
const input1 = document.querySelector("#num1")
const input2 = document.querySelector("#num2")

// btn.addEventListener("click", ()=> {            //instruyo al botón para que ejecute la acción
//     imagenPrincipal.classList.toggle("radius")
//     // title.style.color="#ff0000"    
// })

btn.addEventListener("click", () => {            //instruyo al botón para que ejecute la acción
    const op = Number(num1.value) + Number(num2.value)
    result.innerHTML = op
})
