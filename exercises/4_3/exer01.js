/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */



let n = 5;
let i;
let simLinha = '*';
let espLinha = '';

//cria 5 vezes na linha
for (i = 0; i < n; i+=1) {
  espLinha = espLinha + simLinha;
};

//imprime 5 vezes
for (i = 0; i < n; i+=1) {
  console.log(espLinha);
};