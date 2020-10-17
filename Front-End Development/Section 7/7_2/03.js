// Crie uma função para mostrar o tamanho de um objeto.

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

const leghtLesson = () => {
 console.log(`Tamanho do objeto Lesson1: ${Object.keys(lesson1).length}`);
 console.log(`Tamanho do objeto Lesson2: ${Object.keys(lesson2).length}`);
 console.log(`Tamanho do objeto Lesson3: ${Object.keys(lesson3).length}`);
};

leghtLesson();
