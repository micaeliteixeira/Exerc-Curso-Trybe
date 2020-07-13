/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

let peçaXadrez = 'rainha';

switch(peçaXadrez.toLowerCase()){
 case 'rainha':
  console.log("Rainha -> movimenta-se na horizontal, vertical e diagonal, quantas casas estiverem disponíveis.");
  break;
 case 'rei' :
  console.log("Rei -> movimenta-se mover-se tanto na vertical quanto na horizontal, porém só pode andar uma casa de cada vez.");
  break;
 case 'pião' :
  console.log("Peão -> movimenta-se apenas para frente, uma casa de cada vez.");
  break;
 case 'torre' :
  console.log("Torre -> movimenta-se por todo tabuleiro, mas com uma condição: desde que seja na vertical ou horizontal, quantas casas quiser, desde que não estejam ocupadas.");
  break;
 case 'bispo' :
   console.log("Bispo -> movimenta-se por todo tabuleiro, mas com uma condição: ele só se movimenta na diagonal.");
   break;
 case 'cavalo' :
   console.log("Cavalo -> movimenta-se em forma de L. Ele salta duas casas e se posiciona à esquerda ou direita da segunda casa.");
   break;
 default:{
  console.log ("ERRO!!! Peça inválida!");}  
 };
