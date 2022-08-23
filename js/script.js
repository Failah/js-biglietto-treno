const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

const ticketPrice = (km * 0.21).toFixed(2);

console.log("km", km);
console.log("age", age);

if (!isNaN(km) && !isNaN(age))
    if (age < 18) {
        document.getElementById("price").innerHTML = ticketPrice * 4 / 5 + " Euro";
    } else if (age > 64) {
        document.getElementById("price").innerHTML = ticketPrice * 3 / 5 + " Euro";
    } else {
        document.getElementById("price").innerHTML = ticketPrice + " Euro";
    }
else {
    document.getElementById("price").innerHTML = "Non hai inserito un numero!";
}
