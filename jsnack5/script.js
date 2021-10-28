/*
    5 - Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    se è dispari inseriscilo nell’array.

    1. creo un array
    2. chiedo all'utente di inserire un numero
    3. controllo che sia dispari
        3.1 se è dispari lo inserisco nell'array
*/

let numeri = [];
let numeriDispari=[];

for(let i = 0; i < 6; i++){

    numeri.push(parseInt(prompt("inserisci un numero: ")));

    if(!(numeri[i] % 2 === 0)){
        numeriDispari[i] = numeri[i];
    }
}

