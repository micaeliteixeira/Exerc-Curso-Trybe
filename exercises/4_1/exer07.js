/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: 
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100*/

notaAluno = 67;

if (notaAluno>=90  && notaAluno<=100){
  console.log ('Nota A');
}else if (notaAluno>=80 && notaAluno<90){
 console.log ('Nota B');
}else if(notaAluno>=70 && notaAluno<80){
  console.log ('Nota C');
}else if(notaAluno>=60 && notaAluno<70){
  console.log ('Nota D');
}else if (notaAluno>=50 && notaAluno<60){
  console.log ('Nota E');
}else if(notaAluno>=0 && notaAluno<50){
  console.log ('Nota F');
}else{
 console.log('ERRO! Nota inferior a 0 ou 100');
}