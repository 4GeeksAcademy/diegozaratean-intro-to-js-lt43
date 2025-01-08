console.log("hola des main.js")

const persona = {
  nombre: 'Adler',
  apellido: "Sejousnat",
  edad: 33,
  skills: ['js','react','python'],
  "lugar de nacimiento": 'haiti',
  programar: function(){
    console.log('estoy programando')
  }
}

const arrayEjemplo = [ 'Adler',"Sejousnat"]

const mascota = {
  nombre: 'gordo',
  raza: 'chitzu',
  color: ['blanco','cafe'],
  ladrar: function(){
    console.log('wow')
  }
}




// PSEUDOCODIGO
// DONE: crear el boton en index.html
// DONE: cuando le de click al boton se ejecute una acción
// DONE: crear funcion que cambie titulo
function cambiarTitulo(){
  let colores = ['red','blue','yellow','violet','green','aqua']
  let nombres = ['Adler','Matias','Alejandro','Franco','Martin','Oscar']
  let randomColor = colores[ Math.floor(Math.random() * colores.length) ]
  document.getElementById('title').style.backgroundColor = randomColor
  let randomName = nombres[ Math.floor(Math.random() * nombres.length) ] 
  document.querySelector('#title').innerHTML = 'hola ' +randomName
}
// cambiarTitulo()


// PSEUDOCODIGO
// realizar un programa que simule dos(2) dados y tenga un boton para lanzar los dados
function lanzarDados(){
  let dice1 = Math.floor( Math.random() * 6) + 1
  let dice2 = Math.ceil( Math.random() * 6) 
  document.getElementById('dado1').innerHTML = dice1
  document.getElementById('dado2').innerHTML = dice2
}
// agregar estilo



// PSEUDOCODIGO
// DONE: agregar boton al html
// DONE:crear funcion
function redimensionarDados(){
  console.log('redimensionarDados')
  // obtener el valor de alto y ancho del html en js
  console.log(document.getElementById('height').value )
  console.log(document.getElementById('width').value )
  // DONE:cambiar el alto a dado 1 y dado 2
  document.querySelector('#dado1').style.height = document.getElementById('height').value + 'px' 
  document.querySelector('#dado2').style.height = document.getElementById('height').value + 'px' 
  // DONE:cambiar el ancho a dado 1 y dado 2
  document.querySelector('#dado1').style.width = document.getElementById('width').value + 'px' 
  document.querySelector('#dado2').style.width = document.getElementById('width').value + 'px' 
}
// redimensionarDados()
// DONE: agregar input de alto y ancho al html
// DONE:cuando le de click al boton ejecutar una funcion
document.getElementById('btn-mezclador').addEventListener("click", function() {
  console.log('con evente listener')
  redimensionarDados()
}); 
//elemenot.addEventListener(que debe observar, que hago cuando eso pase)




Math.random()

setInterval(lanzarDados, 3000);

// function myCallback() {
//   lanzarDados()
// }
