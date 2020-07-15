/*Agora inverta o lado do triângulo.*/

let n = 5;
let i;
let j;
let simbolo = '*';
let naLinha = '';
let posição = n;

for (i = 0; i < n; i++) {
  for (j = 0; j <= n; j++) {
    if (j < posição) {
      naLinha = naLinha + ' ';
    } else {
      naLinha = naLinha + simbolo;
    }
  }
  console.log(naLinha);
  naLinha = '';
  posição--;
};