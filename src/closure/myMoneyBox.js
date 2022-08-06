//function moneyBox(coins) {
    //let saveCoins = 0;
    //saveCoins += coins;
    //console.log(`Money box: $${saveCoins}`);
//}

//moneyBox(5);
//moneyBox(5);

function moneyBox() {
    let saveCoins = 0; // constante declarada justo dentro de la primera función
    function countCoins(coins) { // función que realiza la lógica
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins; // nuestra primera función retorna la segunda función
}

const myMoneyBox = moneyBox(); // constante igual a la primera función, va a guardar mis ahorros
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox(); // va a guardar los ahorros de Ana
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);