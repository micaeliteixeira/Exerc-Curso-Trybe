
window.onload = function () {
 const state = document.getElementById('state');
 let states = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

  

 for (i =0 ; i<states.length; i += 1){
  const select = document.createElement('option');
  select.innerHTML = states[i];
  state.appendChild(select);
 }
 
}