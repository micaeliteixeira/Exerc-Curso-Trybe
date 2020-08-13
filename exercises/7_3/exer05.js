// Compare dois objetos (JSON) para verificar se são idênticos ou não.

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

//Comparando se obj1 é igual ao obj2
assert.deepEqual(obj1, obj2);

//Comparando se obj1 é igual ao obj3, onde nesse caso o teste deve apontar erro.
assert.deepEqual(obj1, obj3);