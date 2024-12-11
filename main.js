console.log("hola des main.js")



// let nombre = 'Diego'
// console.log('Antes de la funcion ',nombre)
// function saludarEstudiante(nombre){
//     let numero = 6
//     console.log('numero',numero)
//     console.log('Dentro de la funcion ',nombre)
//     console.log('Hola ' + nombre)
// }
// console.log('Despues de la funcion ',nombre)
// saludarEstudiante('Oscar')
// console.log('numero',numero)
// saludarEstudiante('Matias')
// saludarEstudiante('Saray')



// function transportar(origen,destino){
//     console.log('Saliendo de '+origen)
//     console.log('desplazandome')
//     console.log('llegando a '+destino)
// }

// transportar('casa','gym')
// transportar('gym','oficina')
// transportar('oficina','casa')
// // transportar()


// function suma(num1,num2){
//     return num1 + num2
// }


// console.log('resultado',suma(2,2)) // 4
// console.log('resultado',suma(1,5)) // 6
// console.log('resultado',suma(8,0)) // 8
// console.log('resultado',suma(7,2)) // 9

// // realiar funcion admitido  que si soy mayor de 18 me dia 'Puedes entrar' , si no me diga "Debes esperar"
// function admitido(edad){
//     if(edad >= 18){
//         return 'Puedes entrar'
//     }else{
//         return 'Debes esperar'
//         console.log('CABRITAS')
//     }
// }

// console.log(admitido(21))


// realizar una funcion que cacule el impuestyo d eun gtrabajador unieprsonal 7%
// function calculoImpuesto(salario){
//     console.log('Debes pagar ' + salario * 0.07)
//     return salario * 0.07
// }

// // calculoImpuesto(10000)

// document.getElementById('impuesto').innerText = calculoImpuesto(10000)

// console.log('Antes del windowOnload')
// window.onload = function(){
//     // you code goes here
//     console.log('Dentro del windowOnload')
// }
// console.log('Despues del windowOnload')

// funcion declarativa
saludoDeclartivo()
function saludoDeclartivo(){
    console.log('saludoDeclartivo')
}

// funcion de expresión
const saludoExpresion = function (){
    console.log('saludoExpresion')
}
saludoExpresion()

// funcion flecha / arrow
const saludoFlecha =  ()=> {
    console.log('saludoFlecha')
}
saludoFlecha()

// PSEUDOCODIGO
// desarrollar un generad de excusas de Quien, Accion,Cuando  y Que
// 1. modificar el html desde el js, mandar la escusa al html
// 2. defnir listas de Quien, Accion,Cuando  y Que
// 3. tomar un array de Quien y seleccionar un elemento aleatorio del array
// 4. tomar un array de Accion y seleccionar un elemento aleatorio del array
// 5. tomar un array de Cuando y seleccionar un elemento aleatorio del array
// 6. tomar un array de Que y seleccionar un elemento aleatorio del array