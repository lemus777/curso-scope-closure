function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // var: function scope
        let fruit2 = 'Kiwi'; // let: block scope
        const fruit3 = 'Banana'; //const: block scope
    }
    console.log(fruit1); // funciona (function scope)
    console.log(fruit2); // no funciona
    console.log(fruit3); // no funciona
}

fruits();