console.log("hola des main.js")

// realicen un programa que tome el sueldo de un usuairo y le calcule el impuesto 
// si es menor a 1000 se debe indicar "Debes pagar el 5%" si es mayor a 1000 se debe indicar
// "Debes pagar el 10%"

// PSEUDOCODIGO
// definir variable sueldo
let sueldo = 400
// // validar si sueldo es mayor o no a 1000
// let mensaje = ''
// if( sueldo < 1000){
//     // hago algo:  debo imprimir "Debes pagar el 5%" s
//    mensaje = "Debes pagar el 5%"
// }else{
//     // hago otra cosa:  debo imprimir "Debes pagar el 10%" s
//     mensaje = "Debes pagar el 10%"
// }
// mostrar el resultado (consola)
// console.log(mensaje)

// Ternary operator
// if(condicion){
//     que hago si verdadero
// }else{
//     que hago si falso
// }
//(condicion) ?que hago si verdadero : que hago si falso
let mensaje =  ( sueldo < 1000) ? "Debes pagar el 5%" : "Debes pagar el 10%"
console.log(mensaje)
let content = document.getElementById('content')

content.insertAdjacentHTML(
    'beforeEnd',
    `<h1>${mensaje}</h1>`,
  );
// CASOS DE USO:
// 400 => "Debes pagar el 5%"
// 1200 => "Debes pagar el 10%"
// 1000 => "Debes pagar el 10%"
