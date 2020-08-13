// A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

console.log (sum(2,3));

// implemente seus testes aqui
// 01 - Teste se o retorno de sum(4, 5) é 9

const expected = sum(5, 5);
assert.strictEqual(expected, 9);

// 02 - Teste se o retorno de sum(0, 0) é 0

const expected = sum(0, 0);
assert.strictEqual(expected, 0);

// 03 - Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)

const expected = sum(4, "5");
assert.strictEqual(expected, 9);

// 04 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const expected = sum(4, "5");
assert.strictEqual(expected, 9);