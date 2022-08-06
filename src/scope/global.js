// variables

var a; //declarando
var b = "b" // Declaramos y asignamos
b = "bb" // reasignamos
var a = 'aa' // redeclaración


// Global scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'colombia'; // esto asigna, y por tanto declara de forma indirecta, una variable global
    console.log(country);
}

countries();
console.log('country');