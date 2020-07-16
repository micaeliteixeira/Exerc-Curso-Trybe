/*Faça um for/in que mostre todas as chaves do objeto.

Valor esperado no console:  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim*/

  let info = {
   personagem: "Margarida",
   origem: "Pato Donald",
   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  
  info.recorrente = "Sim";
  
  for (let novo in info){
    console.log(info[novo]);
  }