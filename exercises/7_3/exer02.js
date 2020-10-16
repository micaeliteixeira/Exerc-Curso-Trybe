// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
 console.log (myRemove([1, 2, 3, 4], 5));

// implemente seus testes aqui
// 01 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
// Dá para usar também o deepStrictEqual ==> assert.deppStrictEqual(myRemove(expected), [1, 2, 3])

const expected = ([1, 2, 3, 4], 3);
assert.ok(myRemove(expected));  

// 02 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 03 -  Verifique se o array passado por parâmetro não sofreu alterações

const expected = [1, 2, 3, 4];
myRemove(expected.length, 3);
assert.deepStrictEqual(expected, [1, 2, 3, 4]); 

// 04 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const expected = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected, [1, 2, 3, 4]); 
