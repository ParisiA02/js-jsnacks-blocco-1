/*
    3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.

    1. chiedo all'utente i dieci numeri
    2. sommo i numeri
    3. stampo il risultato

*/

let numeri = []
let risultato = 0;

for(let i = 0; i < 10; i++){
    numeri.push(parseInt(prompt("inserisci un numero: ")));
    risultato += numeri[i]; 
}
console.log("risultato: ", risultato);