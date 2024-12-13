console.log("hola des main.js")

let gameNames = ['Mario','Luigi','Bowser','Toad','Peach']

// console.log(gameNames[0])
// console.log(gameNames[1])
// console.log(gameNames[2])
// console.log(gameNames[3])
// console.log(gameNames[4])

//for(inicialización;condciion;actualización)
// i = 4 ===> Peach
// i = 3 ===> Toad
// i = 2 ===> 2
// i = 1 ===> 3
// i = 0 ===> Mario


// i = i + 1 ====> i++
for(i = gameNames.length -1; i >= 0  ;i--){
    console.log(gameNames[i])
}







let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(numbers)


// i = 0  ==> 1
// i = 3  ==> 4
// i = 6  ==> 7
// i = 9  ==> 10
// i = 12  ==> 13
// i = 15  ==> 16
// i = 18  ==> 19
// i = 21  ==> 19

// i = i + 1 ====> i++
// i = i + 3 ====> i+=3
for(i=0; i < numbers.length; i+=3){
    console.log(numbers[i])
}


let goodGameNames = []

// por todos los elementos del array

console.log(gameNames)

// impimrir todos los elementos del array gameNames
for(i=0; i < gameNames.length ; i = i +1){
    if( gameNames[i] != 'Bowser' ){
        goodGameNames.push(gameNames[i])
    }
}


console.log("goodGameNames",goodGameNames)

console.log( gameNames.filter( (name)=> name != 'Bowser' ) )

console.log( numbers.filter( (number)=> number > 7 ) )
console.log( numbers.filter( (number)=> number != 7 ) )

console.log( numbers.filter( (number)=> number %3 == 0 ) )

console.log( numbers.filter( (number)=> number > 7 ) )
console.log( numbers.filter( (number)=> number < 15 ) )

console.log( numbers.filter( (number)=> number > 7 && number < 15 ) )
console.log(numbers)

let newNumbers = []
for(i=0;i < numbers.length;i++){
    console.log(numbers[i] * 4)
    newNumbers.push(numbers[i] * 4)
}
console.log("newNumbers",newNumbers)

// let mapNumbers = numbers.map( (x)=> x * 4 )
console.log(numbers.map( (number)=> number * 4 ))
console.log(numbers)

console.log( gameNames.map( (name)=> name + 's' ) )


gameNames.forEach( (item)=>{
    console.log(item)
})

console.log('Do while')
let j = 20
do{
    console.log(j)
    j++
}while( j < 10)