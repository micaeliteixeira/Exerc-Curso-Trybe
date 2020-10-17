window.onload = function(){

/*As pessoas devem ter o poder de alterar:

Cor de fundo da tela;*/
   //CLEAR
let bgColorBottonClear= document.querySelector('#clear');
function bgColorClear(){ 
  let modifyBg = document.querySelector('.modify');
  modifyBg.style.backgroundColor = "#ffffff";
 }
bgColorBottonClear.addEventListener('click',bgColorClear);

  //DARK
let bgColorBottonDark= document.querySelector('#dark');
function bgColorDark(){ 
  let modifyBg = document.querySelector('.modify');
  modifyBg.style.backgroundColor = "#10100f";
}
bgColorBottonDark.addEventListener('click',bgColorDark);
 
  //NORMAL
let bgColorBottonNormal= document.querySelector('#normal');
function bgColorNormal(){ 
  let modifyBg = document.querySelector('.modify');
  modifyBg.style.backgroundColor = "#ffebcd";
}
bgColorBottonNormal.addEventListener('click',bgColorNormal);


//Cor do texto;
  //CLEAR TEXT
let textColorBottonClear= document.querySelector('#clearT');
function textColorClear(){ 
  let modifyColorText = document.querySelector('.modify');
  modifyColorText.style.color = "#ffffff";
 }
textColorBottonClear.addEventListener('click',textColorClear);

  //DARK
let textColorBottonDark= document.querySelector('#darkT');
function textColorDark(){ 
  let modifyColorText = document.querySelector('.modify');
  modifyColorText.style.color = "#000000";
}
textColorBottonDark.addEventListener('click',textColorDark);


//Tamanho da fonte;

//BIGGER
let sizeBigger= document.querySelector('#bigger');
function textFontSizeBigger(){ 
  let modifyFontSize = document.querySelector('.modify');
  modifyFontSize.style.fontSize = "x-large";
 }
sizeBigger.addEventListener('click',textFontSizeBigger);

//SMALL
let sizeSmall= document.querySelector('#small');
function textFontSizeSmall(){ 
  let modifyFontSize = document.querySelector('.modify');
  modifyFontSize.style.fontSize = "x-small";
 }
sizeSmall.addEventListener('click',textFontSizeSmall);


//Espaçamento entre as linhas do texto;
//BIGGER SPACING
let spacing= document.querySelector('#biggerSpacing');
function biggerSpacing(){ 
  let modifyFont = document.querySelector('.modify');
  modifyFont.style.letterSpacing = "3px";
 }
spacing.addEventListener('click',biggerSpacing)

//SMALL SPACING
let spacingSmall= document.querySelector('#smallSpacing');
function smallSpacing(){ 
  let modifyFont = document.querySelector('.modify');
  modifyFont.style.letterSpacing = "1px";
 }
spacingSmall.addEventListener('click',smallSpacing)


//Tipo da fonte (Font family).
//ARIAL
let textFont= document.querySelector('#font');
function textFontA(){ 
  let modifyFont = document.querySelector('.modify');
  modifyFont.style.fontFamily = "Times New Roman";
 }
textFont.addEventListener('click',textFontA);

//IMPACT

let textFontImpact= document.querySelector('#impactFont');
function textFontI(){ 
  let modifyFontI = document.querySelector('.modify');
  modifyFontI.style.fontFamily = "Arial";
 }
textFontImpact.addEventListener('click',textFontI);

 }




