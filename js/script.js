// SVOLGIMENTO 1

// const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
// const age = parseInt(prompt("Quanti anni hai?"));

// const ticketPrice = (km * 0.21).toFixed(1);

// console.log("km", km);
// console.log("age", age);

// if (!isNaN(km) && !isNaN(age)) {
//     if (age < 18) {
//         document.getElementById("price").innerHTML = ticketPrice * 4 / 5 + " Euro";
//     } else if (age > 64) {
//         document.getElementById("price").innerHTML = ticketPrice * 3 / 5 + " Euro";
//     } else {
//         document.getElementById("price").innerHTML = ticketPrice + " Euro";
//     }
// }
// else {
//     document.getElementById("price").innerHTML = "Non hai inserito un numero!";
// }


// SVOLGIMENTO 2 MIGLIORATO
const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

let ticketPrice = (km * 0.21);

console.log("km", km);
console.log("age", age);

if (!isNaN(km) && !isNaN(age)) {
    let ticketPriceCurrent = 0;
    if (age < 18) {
        ticketPriceCurrent = ticketPrice * 4 / 5;
    } else if (age > 64) {
        ticketPriceCurrent = ticketPrice * 3 / 5;
    }
    document.getElementById("price").innerHTML = ticketPriceCurrent.toFixed(2) + " Euro";
}
else {
    document.getElementById("price").innerHTML = "Non hai inserito un numero!";
}