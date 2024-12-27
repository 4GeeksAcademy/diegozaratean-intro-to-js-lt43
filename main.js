console.log("hola des main.js")

const persona = {
  nombre: 'Adler',
  apellido: "Sejousnat",
  edad: 33,
  skills: ['js','react','python'],
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
  console.log('cambiarTitulo')
  // DONE:  cambiar el texto del titulo
  document.querySelector('#title').innerHTML = 'nuevo titulo' 
  // DONE: cambiar el color del titulo
  document.getElementById('title').style.backgroundColor = 'blue' 
}
// cambiarTitulo()










