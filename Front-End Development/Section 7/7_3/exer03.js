// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array.
// Observações sobre o código da função : o len foi criando junto do let i, sem necessidade de colocar o let para ele. 

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

console.log (myRemoveWithoutCopy([1, 2, 3, 4], 3));

// 01 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

assert.deppStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3]);

// 02 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//03 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações.

const expected = [1, 2, 3, 4];
myRemoveWithoutCopy(expected.length, 3);
assert.deepStrictEqual(expected, [1, 2, 3, 4]); 

// 04-  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); 