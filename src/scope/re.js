var firstName; // undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarar / asignar
secondName = 'Ana'; // reasignar
console.log(secondName);

// let

let fruit = 'Apple'; // declarar / asignar
fruit = 'Kiwi'; // reasignar

let fruit = 'Banana'; // no se puede redeclarar por let

// const
const animal = 'dog'; // declarar / asignar
animal = 'cat'; // reasignar, no podmeos porque es const
const animal = 'Snake'; // redeclarar, tampoco se puede con const
console.log(animal); 


const vehicles = [];
vehicles.push('coche'); // en el caso de array si podemos añadir elementos a un const
console.log(vehicles);

vehicles.pop(); // e incluso podemos quitar elementos del array declarado con const
console.log(vehicles);