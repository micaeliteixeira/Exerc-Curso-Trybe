
window.onload = function () {

 //ESTADOS
 const state = document.getElementById('state');
 let states = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

  for (i =0 ; i<states.length; i += 1){
  const select = document.createElement('option');
  select.innerHTML = states[i];
  state.appendChild(select);
 }
 
 //DATA
 document.getElementById('date').DatePickerX.init()

 //JUSTVALIDATE
 new JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    name:{
     required: true,
     maxLength: 50,
    }
  },
  messages: {
    email: {
      required: 'Campo obrigatório',
      email: 'Formato do email inválido'
    },
    cpf: {
     required: 'Campo obrigatório',
     email: 'Formato máximo de 11 numeros'
   },
    name: {
     required: 'Campo obrigatório',
     email: 'Escreva seu nome'
   }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});
}