// const variableCorazon = document.querySelector("#corazon")
// const imagen = document.querySelector("img")
// const div = document.querySelector("div")

// function favoritos() {
//   if(variableCorazon.style.color === "blue"){
//     variableCorazon.style.color = "white"
//   }else{
//     variableCorazon.style.color = "blue"
//   }
  
// }

// imagen.ondblclick = favoritos
// variableCorazon.onclick = favoritos


// console.dir(boton)


// Tienen hasta las 12.30 para realizar este ejercicio
// Ejercicio: hacer un boton, que, al hacer click en el boton se cambie el color del texto.
// y al hacer doble click sobre mismo boton se amplie la letra


const boton = document.querySelector("button")
const texto = document.querySelector("h2")

function cambiarColor(){
  if(boton.style.color === "green"){
    boton.style.color = "black"
  }else{
    boton.style.color = "green"
  } 
}

function cambiarTamaño(){
  if(boton.style.fontSize === "60px"){
    boton.style.fontSize = "20px"
  }else{
    boton.style.fontSize = "60px"
  }
  
}

boton.onclick = cambiarColor
boton.ondblclick = cambiarTamaño
















