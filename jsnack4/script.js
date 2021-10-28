/*
    4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

let invitati = ["Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Jordan Baker", "Myrtle Wilson", "Tom Buchanan"];
let nome = prompt("Inserisci nome e cognome: ");
let trovato = false;

for (let i = 0; i < invitati.length; i++) {

    if(nome === invitati[i]){
        trovato = true;
    }
    
}

if(trovato){
    console.log("Invito trovato, puoi partecipare");
}else{
    console.log("Invito non trovato, la partecipazione è esclusiva");
}