/*
    6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

    1. creo un array
    2. genero un numero
    3. confronto il numero generato con i numeri precedenti
        3.1 se il numero è presente ne genero un altro
        3.2 se non è presente lo inserisco nell'array
*/


let numeri = [];


while (numeri.length < 50) {
    
    const numero = Math.floor(Math.random() * 100 + 1);

    // let trovato = numeri.includes(numero);

    // for(let i = 0; i < numeri.length; i++){
    //     if(numero === numeri[i]){
    //         trovato = true;
    //     }
    // }

    if (!(numeri.includes(numero))){
        numeri.push(numero);
    }
}
console.log(numeri);