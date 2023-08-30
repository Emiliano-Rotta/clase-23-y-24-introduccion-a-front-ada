// const variableCorazon = document.querySelector("#corazon")
// const imagen = document.querySelector("img")
// const div = document.querySelector("div")
// const body = document.querySelector("body")

// function favoritos() {

//   if(variableCorazon.style.color === "blue"){
//     variableCorazon.style.color = "white"
//   }else{
//     variableCorazon.style.color = "blue"
//     // variableCorazon.className = "fa fa-camera-retro fa-lg"
//   }
// }  

// imagen.ondblclick = favoritos
// variableCorazon.onclick = favoritos

// console.log(variableCorazon)
// console.dir(variableCorazon)


// Tienen hasta las 12.30 para realizar este ejercicio
// Ejercicio: hacer un boton, que, al hacer click en el boton se cambie el color del texto.
// y al hacer doble click sobre mismo boton se amplie la letra


// const boton = document.querySelector("button")
// const texto = document.querySelector("h2")

// function cambiarColor(){
//   if(boton.style.color === "green"){
//     boton.style.color = "black"
//   }else{
//     boton.style.color = "green"
//   } 
// }

// function cambiarTamaño(){
//   if(boton.style.fontSize === "60px"){
//     boton.style.fontSize = "20px"
//   }else{
//     boton.style.fontSize = "60px"
//   }
  
// }

// boton.onclick = cambiarColor
// boton.ondblclick = cambiarTamaño




//////////////////////////////////////CLASE 24////////

//Modal
// const modal = document.querySelector("#modal")
// const botonAbrirModal = document.querySelector("#abrir-modal")
// const botonCerrarModal = document.querySelector("#cerrar-modal")


// // function mostrarModal(){    (Linea 60 y 61 es la misma cosa)
// const mostrarModal = () => {
//   modal.style.display = "block"
// }

// function cerrarModal(){
//   modal.style.display = "none"
// }

// botonCerrarModal.onclick = cerrarModal
// botonAbrirModal.onclick = mostrarModal


// const corazon = document.querySelector("#corazon")

// // toggle
// function cambiarColor() {
//   //si el elemento tiene la clase, se la quita.
//   //si el elemento no tiene la clase, se la agrega.
//   corazon.classList.toggle("azul")
// }

// corazon.onclick = cambiarColor

// const icono = document.querySelector("#icono")
// const body = document.querySelector("body")

// function cambiarModo (){

//   body.classList.toggle("modo-oscuro")

//   if (icono.className === "fa fa-sun-o"){
//     icono.className = "fa fa-moon-o"
//   }else {
//     icono.className = "fa fa-sun-o"
//   }
  
// }


// icono.onclick = cambiarModo


//Carrusel

const carrusel = document.querySelector(".carrusel-items")

// let maxScroll = carrusel.scrollWidth - carrusel.scrollWidth
let intervalo = null
let step = 1

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step
  }, 10)

}

// const stop = () =>{}

start()
