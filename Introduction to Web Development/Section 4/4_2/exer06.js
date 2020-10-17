/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

/*Apenas teste por minha parte e complementando para numeros pares e exibindo qual numero é impar e par";*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
impar  = 0;
par= 0;
for (let i=0; i<numbers.length; i++){
  
 if (numbers[i]%2!==0){
   console.log ( 'Número impar:' + numbers[i]);
   impar++;
  } else {
   console.log ( 'Número par:' + numbers[i]);
   par++;
  }
} 

console.log('A quantidade de numeros impares é : ' + impar );
console.log('A quantidade de numeros pares é : ' + par );
