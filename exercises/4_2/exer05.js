/*Utilizando for, descubra qual o maior valor contido no array e imprima-o*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
bigger  = 0;

for (let i=0; i<numbers.length; i++){
  if (bigger<numbers[i]){
   bigger=numbers[i];
  }
} 

console.log('O maior numero é: ' + bigger );

