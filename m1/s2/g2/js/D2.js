/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = 13
let n2 = 10
if(n1 < n2 ){ 
      console.log('n2 è più grande');
}else if(n1 > n2){
    console.log('n1 è più grande')
}else{
    console.log('sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if(n1 != 5){
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if(n2 % 5 === 0){
  console.log('divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if(n1 === 8 || n2 === 8){
  console.log('uguale a 8');
}else if(n1 +- n2 === 8){
  console.log('uguale a 8');
}
  

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
let totale = 'totalShoppingCart'
totale = parseInt(40)
if (totale > 50) {
  console.log('spedizione gratuita');
}else{
  console.log(totale + 10)
}
} 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totale = 'totalShoppingCart'
totale = parseInt(40)
let sconto = (totale / 100 * 20)
if (sconto > 50) {
  console.log('spedizione gratuita');
}else{
  console.log(sconto + 10)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let v1 = 15
let v2 = 11
let v3 = 20
if (v1 >= v2 && v1 >= v3) {
  if (v2 >= v3) {
    console.log(v1,v2,v3);
  } else {
    console.log(v1,v3,v2);
  }
} else if (v2 >= v1 && v2 >= v3) {
  if (a >= c) {
    console.log(v2,v1,v3);
  } else {
    console.log(v2,v3,v1);
  }
} else {
  if (v1 >= v2) {
    console.log(v3,v1,v2);
  } else {
    console.log(v3,v2,v1);
  }
}
  

 


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let = '10'
if (typeof let === 'number') {
   console.log('è un numero')
  }else{
    console.log('non è un numero');
  }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

 let n3 = 45
 if (n3 % 2 ===0) {
    console.log('è pari')
 } else {
    console.log('non è pari')
 }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city='toronto'
console.log(me);;


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let Array = []
Array.push(1)
Array.push(2)
Array.push(3)
Array.push(4)
Array.push(5)
Array.push(6)
Array.push(7)
Array.push(8)
Array.push(9)
Array.push(10)
console.log(Array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

Array[9]=100
console.log(Array)
