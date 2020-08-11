// Crie uma função que receba uma frase e retorne qual a maior palavra.
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

let longestWord = (str) => {
  let phares = str.split(' ');
  let bigWord = 0;
  let word = null;
 
  for (let index = 0 ; index <= phares.length -1 ; index += 1){
    if (bigWord < phares[index].length){
     bigWord = phares[index].length;
     word = phares[index];
    }
  }
 return word;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));