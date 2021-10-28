/*
    1 - L’utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
    
    1. chiedo di inserire il primo numero
    2. chiedo di inserire il secondo numero
    3. confronto il primo e il secondo numero -> if
    4. stampo il maggiore
*/
let a = parseInt(prompt("Inserisci il primo numero: "));
let b = parseInt(prompt("Inserisci il secondo numero: "));

if (a > b){
    console.log("Il numero più grande è: ", a);
}else{
    console.log("Il numero più grande è: ", b);
}