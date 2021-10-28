/*
    2- L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.

    1. chiedo all'utente la prima parola
    2. chiedo all'utente la seconda parola
    3. confronto la lunghezza della prima parola con la seconda -> if
    4. stampo prima la parola più corta, poi quella più lunga
*/

let a = prompt("Inserisci la prima parola: ");
let b = prompt("Inserisci la seconda parola: ");

if (a.length > b.length){
    console.log("Questa è la parola più corta: ",b);
    console.log("Questa è la parola più lunga: ",a);
}else{
    console.log("Questa è la parola più corta: ",a);
    console.log("Questa è la parola più lunga: ",b);
}