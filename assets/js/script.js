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

const btn=document.querySelector(".btn-radius") //declaro el boton
const imagenPrincipal = document.querySelector("img") //declaro la imagen
// const title=document.querySelector(".title-iguana")

btn.addEventListener("click", ()=> {            //instruyo al botón para que ejecute la acción
    imagenPrincipal.classList.toggle("radius")
    // title.style.color="#ff0000"    
})


