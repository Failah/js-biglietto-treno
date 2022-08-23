const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

const ticketPrice = km * 0.21;

console.log("km", km);
console.log("age", age);

if (age < 18) {
    document.getElementById("price").innerHTML = ticketPrice * 4 / 5;
} else if (age > 64) {
    document.getElementById("price").innerHTML = ticketPrice * 3 / 5;
} else {
    document.getElementById("price").innerHTML = ticketPrice;
}
