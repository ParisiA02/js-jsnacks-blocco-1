/*
    6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

    1. creo un array
    2. genero un numero
    3. confronto il numero generato con i numeri precedenti
        3.1 se il numero è presente ne genero un altro
        3.2 se non è presente lo inserisco nell'array
*/

// let numeri = [];
// let numeroCasuale = 0;
// let trovato = false;

// let a = 0;

// while(a < 5){

//     numeroCasuale = Math.floor(Math.random() * 10) + 1;

//     for(let i = 0; i < numeri.length; i++){
//         if (numeri[i] === numeroCasuale){
//             trovato = true;
//         }
//     }
    
//     if (!trovato) {
//         console.log(numeroCasuale);
//     }
    
    
//     a++;
// }