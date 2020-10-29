// javascript
$(document).ready( function() {
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali
// numeri sono stati ricordati.

   // riferimento alert
   var fiveNumber = 5;
   var array = [];

   while (array.length < fiveNumber) {
     var nRandom =  random( 10 , 20);

     if (!array.includes(nRandom)) {
       array.push(nRandom);
     }
   }
   alert(array);
   
   // riferimento numeri utente
   var nUser = [];
    setTimeout( function() {
      while (nUser.length < fiveNumber) {
        var nUtente = parseInt( prompt("inserisci il numero.."));
      }
    }, 30000);
});//FINE DOCUMENTO

// funzione per generare numero random
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
