// javascript
$(document).ready( function() {
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali
// numeri sono stati ricordati.


   // riferimento alert
   var nAlert = random(10 , 20);
   var fiveNumber = 5;
   var array = [];

   while (array.length < fiveNumber) {
     var nRandom =  nAlert;

     if (nRandom != array) {
       array.push(nRandom);
     }
   }

    alert(array);
});//FINE DOCUMENTO

// funzione per generare numero random
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
