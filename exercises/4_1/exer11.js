/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
 INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

 IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let newSal = 0,
    IR = 0;
    salBruto = 5600.10,
    salLiq = 0;


if (salBruto<= 1556.94 ){
    newSal = salBruto * 0.08;
}else if (salBruto>=1556.95 && salBruto<=2594.92){
    newSal = salBruto * 0.09;
}else if (salBruto>=2594.93 && salBruto<=5189.82){
    newSal = salBruto * 0.11;
}else {
    newSal = salBruto-570.88;
}


if (newSal<=1903.98){
    IR = newSal;
} else if (newSal>=1903.99 && newSal<=2826.65){
   IR = (newSal * 0.075) - 142.80;
}else if  (newSal>=2826.66 && newSal<=3751.05){
  IR= (newSal * 0.15) - 354.80;
}else if (newSal>=3751.06 && newSal<=4664.68){
   IR = (newSal * 0.225) - 636.13;
} else {
   IR = (newSal*0.275) - 869.36;
}

salLiq = newSal- IR;

console.log('Sálario Líquido de $ ' + salLiq);