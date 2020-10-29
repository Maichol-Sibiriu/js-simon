// javascript
$(document).ready( function() {

   // riferimento alert
   var fiveNumber = 5;
   var array = [];

   while (array.length < fiveNumber) {
     var nRandom =  random( 1 , 100);

     if (!array.includes(nRandom)) {
       array.push(nRandom);
     }
   }
   alert(array);

   // riferimento numeri utente
   var nUser = [];
   // riferimento confronto
   var compare = [];

   // inserimento numeri utente dopo 30 secondi
    setTimeout( function() {
      while (nUser.length < fiveNumber) {
        var nUtente = parseInt( prompt("inserisci un numero a 1 a 100"));
        nUser.push(nUtente);

        // confronto numeri utente con numeri alert
        if (array.includes(nUtente) === true) {
          compare.push(nUtente);
        }
      }
      alert("complimenti hai indovinato " + compare.length + " numeri!!!" + " e sono :" + compare);
    }, 30000);



});//FINE DOCUMENTO

// funzione per generare numero random
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
