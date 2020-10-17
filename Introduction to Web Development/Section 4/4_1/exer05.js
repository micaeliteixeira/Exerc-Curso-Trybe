/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.*/

let angleA = 15;
let angleB = 45;
let angleC = 120;

let sumAgle = angleA+angleB+angleC;

if (sumAgle!==180) {
 console.log("Soma dos três ângulos não representa um triangulo");
}else{
 console.log("Soma dos três ângulos representa um triangulo");
}