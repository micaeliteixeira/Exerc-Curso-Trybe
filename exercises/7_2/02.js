// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const lesson1 = {
 materia: 'Matemática',
 numeroEstudantes: 20,
 professor: 'Maria Clara',
 turno: 'manhã',
};

const lesson2 = {
 materia: 'História',
 numeroEstudantes: 20,
 professor: 'Carlos',
};

const lesson3 = {
 materia: 'Matemática',
 numeroEstudantes: 10,
 professor: 'Maria Clara',
 turno: 'noite',
};

const keys = (a, b, c) => {
  const keyOne = Object.keys(a);
  console.log(`Chaves do objeto Lesson1: ${keyOne}
  ____________
              `)
  const keyTwo = Object.keys(b);
  console.log(`Chaves do objeto Lesson2: ${keyTwo}
  ____________
              `)
  const keyThree = Object.keys(c);
  console.log(`Chaves do objeto Lesson3: ${keyThree}
  ____________
              `)
};

keys (lesson1, lesson2, lesson3);