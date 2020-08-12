// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const lesson2 = {
 materia: 'História',
 numeroEstudantes: 20,
 professor: 'Carlos',
};

const functionLesson2 = () => {
  lesson2['turno'] = 'Manha';
}

functionLesson2();
console.log(lesson2);
