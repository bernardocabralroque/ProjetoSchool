let x=1;
 let btv=[];
 let maqi=0;
 let troca=0;
let contar=0;
 let btc=[];
 for(let i=0; i<10; i++){
  btc[i]=".";
 }
function xbola(bt){
 let btn="bt"+bt

if(btv[bt]!==bt){
 if(x===0){
 document.getElementById(btn).innerText="X"
 btc[bt]="X";
 contar++;
 x++;
 }else{
  document.getElementById(btn).innerText="O";
  btc[bt]="O";
  contar++;
  x=0;
 }
}
btv[bt]=bt;

if(btc[1]===btc[2] && btc[2]===btc[3] && btc[2]!="."){
 
 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);
 
 for(let c=1; c<=3; c++){
  btn="bt"+c;
  document.getElementById(btn).style.background="green";
 }

 
 for( c=4; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).style.background="red";
 }

  
 for(c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=true;
 }


 document.getElementById('so').style.display="block";}
else if(btc[1]===btc[4] && btc[1]===btc[7] && btc[1]!="."){

 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);
 
 for(let c=1; c<=7; c+=3){
  btn="bt"+c;
  document.getElementById(btn).style.background="green";
 }
 
for (let c = 3; c <= 9; c += 3) {
 btn = "bt" + c;
 document.getElementById(btn).style.background = "red";
}
 
 for (let c = 2; c <= 9; c += 3) {
 btn = "bt" + c;
 document.getElementById(btn).style.background = "red";
}
 
 for(let c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=true;
 }


 document.getElementById('so').style.display="block";}

else if(btc[1]===btc[5] && btc[1]===btc[9] && btc[1]!="."){
 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);
  for (let c = 1; c <= 9; c += 4) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 }
 for (let c = 2; c <= 4; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for (let c = 6; c <= 8; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for(let c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=true;
 }


 document.getElementById('so').style.display="block";}

else if(btc[3]===btc[6] && btc[3]===btc[9] && btc[3]!="."){
 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);
  for (let c = 3; c <= 9; c += 3) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 } 
 
  for (let c = 1; c <= 9; c += 3) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 
  for (let c = 2; c <= 9; c += 3) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 
  for(let c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=true;
 }


 document.getElementById('so').style.display="block";} 

else if(btc[2]===btc[5] && btc[5]===btc[8] && btc[2]!="."){
  for (let c = 2; c <= 9; c += 3) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 }
 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);

 for (let c = 1; c <= 9; c+=3) {
 btn = "bt" + c;
 document.getElementById(btn).style.background = "red";
}
  for (let c = 3; c <= 9; c += 3) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for (let c = 1; c <= 9; c++) {
 btn = "bt" + c;
 document.getElementById(btn).disabled = true;
}

 document.getElementById('so').style.display="block";} 

else if(btc[4]===btc[5] && btc[4]===btc[6] && btc[4]!="."){ 
 document.getElementById("mostrar").innerText="Vencedor jogador "+(1+x);
 
 for (let c = 4; c <= 6; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 }
 
  for (let c = 1; c <= 3; c ++ ) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 } 
  for (let c = 7; c <= 9; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for(let c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=true;
 }

 document.getElementById('so').style.display="block";}

else if (btc[3] === btc[5] && btc[5] === btc[7] && btc[3] != ".") {
 for (let c = 3; c <= 7; c += 2) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 }
 document.getElementById("mostrar").innerText = "Vencedor jogador " + (1 + x);
 
 for (let c = 1; c <= 9; c += 8) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for (let c = 2; c <= 9; c += 2) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 }
 for (let c = 1; c <= 9; c++) {
  btn = "bt" + c;
  document.getElementById(btn).disabled = true;
 }
 document.getElementById('so').style.display="block";}

else if (btc[7] === btc[8] && btc[7] === btc[9] && btc[7] != ".") {
 for (let c = 7; c <= 9; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "green";
 }
 document.getElementById("mostrar").innerText = "Vencedor jogador " + (1 + x);
 
 for (let c = 1; c <= 6; c ++) {
  btn = "bt" + c;
  document.getElementById(btn).style.background = "red";
 
 }
 for (let c = 1; c <= 9; c++) {
  btn = "bt" + c;
  document.getElementById(btn).disabled = true;
 }document.getElementById('so').style.display="block";
}


else if(contar===9){
 document.getElementById("mostrar").innerText = "Jogo empatado!";
 for (let c = 1; c <= 9; c ++) {
 btn = "bt" + c;
 document.getElementById(btn).style.background = "red";
  for (let c = 1; c <= 9; c++) {
  btn = "bt" + c;
  document.getElementById(btn).disabled = true;
 }
 }
 document.getElementById('so').style.display="block";
 

}
}
function recomecar(vari) {
 let btn;
 if(vari===1){
 document.getElementById("mostrar").innerText="";
 
 for(let c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).style.background="none";
  document.getElementById(btn).innerText=".";
 }

 for(c=1; c<=9; c++){
  btn="bt"+c;
  document.getElementById(btn).disabled=false;
btc[c]=".";
btv[c]=".";
}
contar=0;
escolha1=1;
 document.getElementById('so').style.display="none";
 }else{
  
   document.getElementById("mostra1").innerText="";
 
 for(let c=1; c<=9; c++){
  btn="bpc"+c;
  document.getElementById(btn).style.background="none";
  document.getElementById(btn).innerText=".";
 }

 for(c=1; c<=9; c++){
  btn="bpc"+c;
  document.getElementById(btn).disabled=false;
btc[c]=".";
onde[c]=0
ver[c]=0
click=0;
x=1;
ana[c]=0
btv[c]=0;

}
if (troca === 1) {
 maqi = 1;
 aguardar(1);
 
 
} else {
 maqi = 0;
 voce()
}
   

  document.getElementById('so1').style.display="none";
 }
 
}
let letra=""
let maq=""
let facil=1;
function par(b) {
 
 if(b===2){
 document.getElementById('es').style.display="none"
 document.getElementById('jogar2').style.display="block"
 }else{
 document.getElementById('es').style.display="none"
 document.getElementById('jogar1').style.display="block"
 
 let ali = Math.floor(Math.random() * 2)+1
if (ali === 1) {
 letra = "X"
 maq="O"
} else {
 letra = "O"
 maq="X"
}
let aliato=Math.floor(Math.random()*2)+1
if(aliato===1){troca=0; recomecar();}else{ troca=1; recomecar(2)}
}
 
}

document.getElementById('imgb').addEventListener('click',function() {
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
 
 clearInterval(contando)
 clearInterval(cmaq);
document.getElementById('jogar1').style.display="none"
document.getElementById('es').style.display="block"

let btn
 if (troca === 1) {
 for (let c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = false;
  document.getElementById(btn).innerText = ".";
  btc[c] = ".";
  onde[c] = 0
  ver[c] = 0
  click = 0;
  x = 1;
  ana[c] = 0
  btv[c] = 0;
  escolha1=10;
 }
  
  
 }


})

let xm=2;
let cmaq;
function aguardar(mx){
 
 clearInterval(contando);
 document.getElementById('eu').style.background='none';
 xm=0;
 for(c=1; c<=9; c++){
 let btnm="bpc"+c;
  document.getElementById(btnm).disabled=true;
 }
 cmaq=setInterval(function(){
  
  if(xm===9){
   clearInterval(cmaq);
   xm=0;
    for (c = 1; c <= 9; c++) {
  let btnm = "bpc" + c;
  document.getElementById(btnm).disabled = false;
 }
 if(mx===1){
  facil=2;
  estra()
  
 }else if(mx===2){
 
  logica();
  
   log="bpc"+rando;
   document.getElementById(log).innerText=maq;
   
   btv[rando]=rando;
      pc[click]=rando;
      onde[rando]=rando;
 }else{
  facil=1;
  facil1();
 }
   voce();
   verifica();
   
  }else{
   if(xm%2===0){
   document.getElementById('maq').style.background='none';
   }else{
    document.getElementById('maq').style.background='yellow';
   }
   xm++;
  }
  
  
 },300
 )
}

 let contando;
function voce(){
 xm=0;
 contando=setInterval(function () { 
  if(xm%2===0){
   
   document.getElementById('eu').style.background='none';
   }else{
    
    document.getElementById('eu').style.background='yellow';
   }
   xm++;
  
 },300)
}


function nivel(vari) {
 if(vari===1){
  document.getElementById('es').style.display='none';
  document.getElementById('nivel').style.display='block'
 }else if(vari===3){
  document.getElementById('nivel').style.display='none'
  document.getElementById('jogar1').style.display='block'
  facil=2
  par(1)
 }else if(vari===2){
  document.getElementById('nivel').style.display='none'
  document.getElementById('jogar1').style.display='block'
  facil=1
  par(3)
 }
}