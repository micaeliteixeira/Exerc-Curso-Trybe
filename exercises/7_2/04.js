// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

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

const valueLesson = () => {
 console.log(`Valores do objeto Lesson1: ${Object.values(lesson1)}
 _______`);
 console.log(`Valores do objeto Lesson2: ${Object.values(lesson2)}
 _______`);
 console.log(`Valores do objeto Lesson3: ${Object.values(lesson3)}`);
}

valueLesson ();