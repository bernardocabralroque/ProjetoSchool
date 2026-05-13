
let escolha1=0;
let click=0;

  let check=0
let ver=[];
for(let v=1; v<=9; v++){
  ver[v]=0;
}
let pc=[];
let ana=[];
let ale=[]

let onde=[]
function xbola1(bt) {
  
  let btn = "bpc" + bt
 let conta1=0;
  if(facil===1 && btv[bt]!=bt){
    btv[bt]=bt;
    
      ver[bt] = bt;
      click++;
      ana[click]=bt;
      

      x=0;
      document.getElementById(btn).innerText = letra
      btc[bt] = letra;
    aguardar(3)
  }else if(facil===2){
  if (btv[bt] != bt) {
   btv[bt]=bt;
    if (x === 1) {
      ver[bt] = bt;
      click++;
      ana[click]=bt;
      

      x=0;
      document.getElementById(btn).innerText = letra
      btc[bt] = letra;
      if (maqi !== 0) {
       
        aguardar(1);
        
        }
   
    if(maqi===0){
      
   aguardar(2)
  
if(click===1){
  escolha1=bt;
  }
 
  
    }
    }
    
  }
  
}
  verifica();
}

let rando=0;
let log;
function logica(){
 if(escolha1===1){
 //primeiro click jogando com humanos
   if(click===1){
     rando=5;
   }
   //segundo
   else if(click===2){
     if(ver[3]===3 && onde[2]!=2){
       rando=2;
     }else if(ver[2]===2 && onde[3]!==3){
       rando=3;
     }else if(ver[4]===4 && onde[7]!==7){
       rando=7;
     }else if(ver[6]===6){
       rando = Math.floor(Math.random() * 2) + 1;
if (rando === 2) {
  rando = 3;
} else {
  rando = 9;
}
     }
     else if (ver[7] === 7 && onde[4] !== 4) {
  rando = 4;
}else if (ver[1] === 1 && ver[2] === 2 && onde[3]!==3) {
  rando = 3;
} else if (ver[8] === 8 && onde[7] !== 7) {
       rando = 7;
   }else if(ver[9]===9){
       rando = Math.floor(Math.random() * 4) + 1;
if (rando === 2) {
  rando = 2;
} else if(rando===1) {
  rando = 4;
}else if (rando === 3) {
  rando = 6;
} else {
  rando = 8;
}
     }
    
   }
   // terceiro 
   else if (click===3) {
     if(onde[2]===2 && onde[5]===5 && ver[8]!==8 ){
       rando=8;
     }else if (onde[1] === 1 && onde[5] === 5 && ver[9] !== 9) {
  rando = 9;
}else if (onde[8] === 8 && onde[5] === 5 && ver[2] !== 2) {
  rando = 2;
}else if (onde[9] === 9 && onde[5] === 5 && ver[1] !== 1) {
  rando = 1;
}else if (ver[4] !== 4 && onde[5] === 5 && onde[6] === 6) {
  rando = 4;
}
else if (onde[4] === 4 && onde[5] === 5 && ver[6] !== 6) {
  rando = 6;
}else if (onde[3] === 3 && onde[5] === 5 && ver[7] !== 7) {
  rando = 7;
}else if (onde[7] === 7 && onde[5] === 5 && ver[3] !== 3) {
  rando = 3;
}else if(onde[2]===2 && onde[5]===5 && ver[8]===8 && ver[4]!==4 && ver[3]==3 && ver[6]!=6){
       rando=Math.floor(Math.random()*2)+1;
       if(rando===2){
         rando=4;
       }else{
         rando=6;
       }
     
}else if (ver[3] === 3 && onde[6] !== 6 && ver[9] === 9) {
  rando = 6;
}else if (ver[2] === 2 && onde[8] !== 8 && ver[5] === 5) {
  rando = 8;
}else if (ver[4] === 4 && onde[6] !== 6 && ver[5] === 5) {
  rando = 6;
}else if (ver[8] === 8 && onde[2] !== 2 && ver[5] === 5) {
  rando = 2;
}else if (ver[1] === 1 && onde[5] !== 5 && ver[9] === 9) {
  rando = 5;
}else if (onde[8] === 8 && onde[3] === 3 && ver[5] === 5 && ver[7]===7 && onde[6]!==6) {
  rando = 6;
}else if (ver[2] === 2 && onde[5] !== 5 && ver[7] === 7 && ver[6]===6) {
  rando = 5;
}else if (ver[4] === 4 && ver[7] === 7 && onde[1] !== 1) {
  rando = 1;
}else if (ver[1] === 1 && ver[7] === 7 && onde[4] !== 4) {
  rando = 4;
}else if (ver[6] === 6 && onde[3] !== 3 && ver[9] === 9) {
  rando = 3;
}else if (ver[1] === 1 && ver[3] === 3 && onde[2] !== 2) {
  rando = 2;
}else if (ver[1] === 1 && onde[3] !== 3 && ver[2] === 2) {
  rando = 3;
}else if (ver[1] === 1 && onde[7] !== 7 && ver[4] === 4) {
  rando = 7;
}else if (ver[1] === 1 && onde[9] !== 9 && ver[5] === 5) {
  rando = 9
}else if (ver[6] === 6 && onde[9] === 9 && onde[5] === 5 && ver[8]===8 && onde[7]!==7 && ver[7]!=7) {
  rando = 7;
} else if (onde[4] === 4 && onde[5] === 5 && ver[6] === 6 && ver[2]!==2 && ver[8]!==8) {
rando = Math.floor(Math.random() * 2) + 1;
if (rando === 2) {
  rando = 2;
} else {
  rando = 8;
}

  
}else if (ver[8] === 8 && onde[7] !== 7 && ver[9] === 9) {
  rando = 7;
}else if (ver[2] === 2 && ver[5] === 5 && ver[1] === 1 && onde[8]===8 && onde[9]!==9) {
  rando = 9;
}else if (ver[1] === 1 && onde[3] === 3 && onde[8] === 8 && ver[2] === 2 && onde[7] !== 7 && ver[7] != 7) {
  rando = 7;
}else if (ver[2] === 2 && onde[5] !== 5 && ver[7] === 7 && ver[9] === 9 && onde[8] === 8) {
  rando = 5;
}else if (ver[2] === 2 && onde[5] !== 5 && ver[9] === 9 && ver[4] === 4 && onde[8] === 8) {
  rando = 5;
}else if (ver[2] === 2 && onde[4] !== 4 && ver[9] === 9 && ver[5] === 5 && onde[8] === 8) {
  rando = 4;
}else if (ver[1] === 1 && onde[5] !== 5 && (ver[6] === 6 || ver[3]===3)&& ver[8] === 8 && onde[2] === 2) {
  rando = 5;
}else if (ver[1] === 1 && ver[5] === 5 && onde[3] !== 3 && ver[8] === 8 && onde[2] === 2) {
  rando = 3;
}else if (ver[6] === 6 && onde[4] !== 4 && ver[5] === 5) {
  rando = 4;
}
   }
   //quarto
   else if(click===4){
     if(onde[4]===4 && onde[5]===5 && ver[6]!==6){
       rando=6
     }else if (onde[1] === 1 && onde[5] === 5 && ver[9] !== 9) {
  rando = 9;
}  else if (onde[3] === 3 && onde[6] === 6 && ver[9] !== 9) {
       rando = 9;
     }else if (onde[1] === 1 && onde[4] === 4 && ver[7] !== 7) {
  rando = 7;
}else if (onde[2] === 2 && onde[3] === 3 && ver[1] != 1) {
  rando = 1;
}else if (onde[2] === 2 && onde[1] === 1 && ver[3] != 3) {
  rando = 3;
}else if (onde[3] === 3 && onde[7] === 7 && ver[5] !== 5) {
  rando = 5
}else if (onde[8] === 8 && onde[5] === 5 && ver[2] !== 2) {
  rando = 2
}else if (onde[9] === 9 && onde[3] === 3 && ver[6] !== 6) {
  rando = 6
}else if (onde[8] === 8 && onde[9] === 9 && ver[7] !== 7) {
  rando = 7
}else if (onde[6] === 6 && onde[5] === 5 && ver[4] !== 4) {
  rando = 4
}else if (onde[3] === 3 && onde[5] === 5 && ver[7] !== 7) {
  rando = 7
}else if (ver[2] === 2 && ver[1] === 1 && onde[3] != 3) {
  rando = 3;
}else if (ver[4] === 4 && onde[6] !== 6 && ver[5] === 5) {
  rando = 6;
}else if (ver[6] === 6 && onde[4] !== 4 && ver[5] === 5) {
  rando = 4;
}else if (ver[1] === 1 && ver[7] === 7 && onde[4] !== 4) {
  rando = 4;
}else if (ver[7] === 7 && onde[5] !== 5 && ver[3] === 3) {
  rando = 5;
}else if (ver[3] !== 3 && onde[5] === 5 && onde[7] === 7) {
  rando = 3
}else if (onde[7] === 7 && onde[9] === 9 && ver[8] !== 8) {
  rando = 8;
}else if (ver[7] === 7 && ver[9] === 9 && onde[8] !== 8) {
  rando = 8;
}else if (ver[4] === 4 && ver[6] === 6 && onde[5] !== 5) {
  rando = 5;
}else if (ver[7] === 7 && ver[8] === 8 && onde[9] !== 9) {
  rando = 9;
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] !== 4) {
  rando = 4;
}else if (ver[1] === 1 && onde[9] !== 9 && ver[5] === 5) {
  rando = 9
}else if (onde[2] === 2 && onde[5] === 5 && ver[8] !== 8) {
  rando = 8
}else if(ver[3]===3 && ver[6]===6 && onde[9]!==9){
       rando=9;
     }else if (ver[3] === 3 && ver[9] === 9 && onde[6] !== 6) {
  rando = 6;
}else if (ver[1] === 1 && ver[4] === 4 && onde[7] !== 7) {
  rando = 7;
}else if (ver[3] === 3 && ver[5] === 5 && onde[7] !== 7) {
  rando = 7;
}else if (ver[1] === 1 && ver[7] === 7 && onde[4] === 4 && onde[3]===3 && ver[8]!==8 && ver[9]!==9) {
  rando = Math.floor(Math.random() * 2) + 1;
if (rando === 2) {
  rando = 8;
} else {
  rando = 9;
}
  
}else if (onde[2] === 2 && onde[5] === 5 && ver[8] === 8 && ver[6]!==6 && ver[9]!==9) {
  rando = Math.floor(Math.random() * 2) + 1;
if (rando === 2) {
    rando = 6;
} else {
  rando = 9;
}
} else if (ver[1] === 1 && ver[3] === 3 && onde[2] !== 2) {
  rando = 2;
}else if (ver[1] === 1 && ver[7] === 7 && onde[4] !== 4) {
  rando = 4;
}else if (ver[1] === 1 && ver[5] === 5 && onde[9] !== 9) {
  rando = 9;
}else if (ver[6] === 6 && onde[9] === 9 && ver[7] !== 7 && ver[4] !== 4) {
  rando = Math.floor(Math.random() * 2) + 1;
  if (rando === 2) {
    rando = 4;
  } else {
    rando = 7;
  }
  
}else if (ver[8] === 8 && onde[7] !== 7 && ver[9] === 9) {
  rando = 7
}else if (ver[8] === 8 && onde[9] !== 9 && ver[7] === 7) {
  rando = 9
}else if (ver[7] === 7 && onde[8] !== 8 && ver[9] === 9) {
  rando = 8
}else if (ver[6] === 6 && onde[3] !== 3 && ver[9] === 9) {
  rando = 3
}else if (click===4) {
    for(let simo=1; simo<9; simo++){
      if(ver[simo]!==simo && onde[simo]!==simo){
        rando=simo
       
       break;
      }
    }
  }

   }
 }
 //escolha x=3
 else if(escolha1===3){
   if (click === 1) {
  rando = 5;
}
if(click===2){
if(ver[1]===1 ){
  escolha1=1;
  logica();
}else if(ver[2]===2){
  rando=1;
} else if(ver[4]===4){
  rando=2;
} else if (ver[6] === 6) {
   rando = 9;
   escolha1=1
 }
 else if (ver[7] === 7) {
  rando = Math.floor(Math.random()*4)+1
  switch (rando) {
   case 1: rando=4; break;
   case 2: rando=2; break;
case 3: rando=8; break;
    default:rando=6;  break;
  }

   
 }else if (ver[8] === 8) {
  rando = 9;
  escolha1 = 1
}else if(ver[9]){
  rando=6
}
}else if(click===3){
  if(onde[1]===1 && onde[5]===5 && ver[9]!==9){
    rando=9;
  }else if (onde[7] === 7 && onde[5] === 5 && ver[3] !== 3) {
  rando = 3;
}else if (onde[6] === 6 && onde[5] === 5 && ver[4] !== 4) {
  rando = 4;
}else if (onde[4] === 4 && onde[5] === 5 && ver[6] !== 6) {
  rando = 6;
}else if (onde[2] === 2 && onde[5] === 5 && ver[8] !== 8) {
  rando = 8;
} else if(onde[1]===1 && onde[5]===5 && ver[9]===9 && ver[6]!=6 && ver[2]===2){
    rando=6;
    escolha1=1;
  }else if (ver[7] === 7 && onde[5] !== 5 && ver[3]===3 && ver[3]===3) {
    rando=5
    
  }else if (ver[6] === 6 && onde[5] !== 5 && ver[9] === 9 && onde[3] !== 3) {
  rando = 3
  
}else if (onde[7] !== 7 && ver[5] === 5 && ver[3] === 3) {
  rando = 7
}else if (onde[1] === 1 && onde[5] !== 5 && ver[4] === 4 && onde[9]!==9 && ver[3]===3) {
    rando=9;
  }
  else if (onde[2] === 2 && onde[5] === 5 && ver[8] === 8 && ver[4]===4 && ver[3]===3) {
  rando = Math.floor(Math.random()*2)+1
  switch (rando) {
   
    case 1: rando=9; break;
    default:rando=7;  break;
  }
  escolha1=1;
}else if (ver[8] === 8 && ver[9] === 9 && onde[7] !== 7) {
  rando = 7;
}else if (ver[7] === 7 && ver[8] === 8 && onde[9] !== 9) {
  rando = 9;
}else if (ver[7] === 7 && ver[4] === 4 && onde[1] !== 1) {
  rando = 1;
} else if (ver[3] === 3 && ver[6] === 6 && onde[9] !== 9) {
  rando = 9;
} else if (ver[3] === 3 && ver[9] === 9 && onde[6] !== 6) {
  rando = 6;
}else if (ver[6] === 6 && ver[9] === 9 && onde[3] !== 3) {
  rando = 3;
} else if (ver[3] === 3 && ver[2] === 2 && onde[1] !== 1) {
  rando = 1;
}else if (onde[6] === 6 && onde[5] === 5 && ver[9] === 9 && ver[4]===4 && ver[3]===3) {
  rando = Math.floor(Math.random()*4)+1
  switch (rando) {
   case 1: rando=1; break;
    case 2: rando=2; break;
    case 3: rando=8; break;
    default:rando=7;  break;
  }
  
} else if (ver[8] === 8 && ver[1] === 1 && onde[5] !== 5) {
   rando = 5;
 }
}
else if(click===4){
  
  if(onde[5]===5 && onde[9]===9 && ver[1]!==1 ){
    rando=1
    }else if (onde[1] === 1 && onde[7] === 7 && ver[4] !== 4) {
  rando = 4;
}else if(onde[5]===5 && onde[1]===1 && ver[9]!==9 ){
      rando=9;
    }else if (ver[5] !== 5 && onde[1] === 1 && onde[9] === 9) {
  rando = 5;
}else if (onde[5] === 5 && onde[8] === 8 && ver[2] !== 2) {
  rando = 2;
}else if (onde[5] !== 5 && ver[3] === 3 && ver[7] === 7) {
  rando = 5;
}else if (ver[1] === 1 && ver[7] === 7 && onde[4] !== 4) {
  rando = 4;
}else{
   escolha1=1
   logica()
  }
}

 }
 // escolha x=7
 else if(escolha1===7){
     if (click === 1) {
     rando = 5;
   }
   if(click===2){
     if(ver[1]===1){
       escolha1=1;
       logica();
     }else if(ver[3]===3){
       escolha1=3;
       logica()
     }else if (ver[2] === 2) {
  rando = 1;
}else if (ver[4] === 4) {
  rando = 1;
}else if (ver[6] === 6) {
  rando = 9;
  escolha1=1
}else if(ver[8]===8){
  rando=9
  escolha1=1;
}else if (ver[9] === 9) {
  rando = 8
}
   } else if (click===3) {
    if(onde[7]===7 && ver[9]!==9 && onde[8]===8){
      rando=9
    }else if (onde[1] === 1 && ver[9] !== 9 && onde[5] === 5) {
  rando = 9
}else if (onde[3] === 3 && ver[7] !== 7 && onde[5] === 5) {
  rando = 7
}else if (onde[8] === 8 && ver[2] !== 2 && onde[5] === 5) {
  rando = 2
}else if (ver[7] === 7 && onde[9] !== 9 && ver[8] === 8) {
  rando = 9
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] !== 3) {
  rando = 3;
}else if (ver[1] === 1 && ver[2] === 2 && onde[3] !== 3) {
  rando = 3;
  escolha1=1;
}else if (ver[7] === 7 && ver[9] === 9 && onde[8] === 8 && onde[5]!=5) {
  rando = 5;
}else if (ver[7] === 7 && ver[9] === 9 && onde[8] !== 8) {
  rando = 8;
}else if (ver[3] === 3 && ver[2] === 2 && onde[1] !== 1) {
  rando = 1;
}else if (ver[7] === 7 && onde[5] !==5 && ver[6] === 6 && onde[3]!==3) {
  rando = 3
}else if (ver[1] === 1 && onde[9] !== 9 && ver[5] === 5) {
  rando = 9
}else if (onde[8] === 8 && onde[5] === 5 && ver[9] === 9 && ver[7]===7 && ver[2]===2) {
  rando = Math.floor(Math.random()*4)+1
  switch (rando) {
   case 1: rando=1; break;
    case 2: rando=3; break;
    case 3: rando=4; break;
    default:rando=6;  break;
  }
}
escolha1=1;
   }
 }
 // escolher x=9
 else if(escolha1===9){
    if (click === 1) {
   rando = 5;
   }else if(click===2){
     if(ver[1]===1){
       escolha1=1;
       logica();
     }else if(ver[2]===2){
       rando=3;
       escolha1=7;
     }else if (ver[3] === 3) {
  escolha1 = 3;
  logica();
}else if (ver[4] === 4) {
  rando = 7;
  escolha1 = 3;
}else if (ver[6] === 6) {
  rando = 3;
  escolha1 = 7;
}else if (ver[7] === 7) {
  escolha1 = 7;
  logica();
}else if (ver[8] === 8) {
  rando = 7;
  escolha1 = 3;
}
   }
 }
 // escolher igual=2
 else if(escolha1===2){
   if(click===1){
   rando=8;
   }
 else if(click===2){
   if(ver[1]===1){
     escolha1=1;
     logica()
   }else if (ver[6] === 6) {
  rando = 3;
  
}else if (ver[7] === 7) {
  rando=Math.floor(Math.random()*2)+1
  if(rando===1){rando=4; escolha1=7}else{rando=3; escolha1=1;}
  
}else if(ver[3]===3){
     rando=1;
     escolha1=3;
     //ficamos
   }else if (ver[4] === 4) {
  rando = 1;
}else if (ver[5] === 5) {
  rando=Math.floor(Math.random()*2)+1
   if(rando===1){
     rando=7;
   }else {rando=9;}
}else if(ver[9]===9){
  rando=1
  escolha1=1
}
   
 }else if(click===3){
   
  if (onde[9] === 9 && ver[7] !== 7 && onde[8] === 8) {
  rando = 7
} else if (onde[7] === 7 && ver[9] !== 9 && onde[8] === 8) {
  rando = 9
} else if (onde[1] === 1 && ver[9] !== 9 && onde[5] === 5) {
   rando = 9
 }else if (ver[5] !== 5 && ver[6] === 6 && ver[7] === 7 && onde[3] === 3) {
  rando = 5
  escolha1 = 1
}else if (ver[7] === 7 && ver[6] === 6 && onde[5] !== 5 && onde[3]!=3) {
  rando = 3
}else if (onde[4] !== 4 && ver[5] === 5 && ver[6] === 6) {
  rando = 4
  escolha1 = 1
}else if(ver[4]===4 && ver[5]===5 && onde[6]!==6){
     rando=6
     escolha1=1
   }else if (ver[4] === 4 && ver[2] === 2 && onde[5] === 5 && onde[3]!=3) {
  rando = 3;
  escolha1 = 1
}else  if (ver[4] === 4 && ver[7] === 7 && onde[3] !== 3 && onde[6]!==6) {
   rando = Math.floor(Math.random()*2)+1
   if(rando===1){
     rando=3;
   }else {rando=6;}
   escolha1 = 1
 }else if (ver[5] !== 5 && ver[6] === 6 && ver[9] === 9 && onde[3]===3) {
  rando = 5
  escolha1 = 1
}else if (ver[4] === 4 && ver[3] === 3 && onde[9] !== 9) {
  rando = 9
  escolha1 = 1
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] !== 3) {
  rando = 3
  escolha1 = 1
}else if (ver[9] === 9 && ver[5] === 5 && onde[1] !== 1) {
  rando = 1
  escolha1 = 1
}else if (ver[4] === 4 && ver[6] === 6 && onde[5] !== 5) {
  rando = 5
  escolha1 = 1
}else if (ver[4] === 4 && ver[9] === 9 && onde[3] !== 3 && onde[6]!==6 && onde[5]!==5) {
  
   rando = Math.floor(Math.random()*3)+1
   if(rando===1){
     rando=3;
   }else if(rando===2) {rando=6;}
   else{
     rando=5;
   }
  escolha1 = 1
}
 }else if(click===4){
   if(ver[4]===4 && ver[6]===6 && onde[5]!=5){
     rando=5;
   }if (ver[5] === 5 && ver[6] === 6 && onde[4] != 4) {
  rando = 4;
}
 }
 }
 // escolher o 4
 else if(escolha1===4){
     if (click === 1) {
    rando = 5;
  }
  if(click===2){
    if(ver[1]===1){
      escolha1=1
      logica();
    }else if (ver[2] === 2) {
  escolha1 = 2
  logica();
}else if(ver[3]===3){
  escolha1=3;
  logica();
}else if (ver[6] === 6) {
  rando = 9;
  escolha1=1;
}else if (ver[7] === 7) {
  escolha1 = 7;
  logica();
}else if (ver[8] === 8) {
  rando=9
  escolha1 = 1;
}else if (ver[9] === 9) {
  escolha1 = 9;
  logica();
}
  }
 }
 // escolher o 6
 else if (escolha1===6) {
     if (click === 1) {
    rando = 5;
  }
  if(click===2){
    if(ver[1]===1){
      escolha1=1;
      logica();
    }else if (ver[2] === 2) {
  rando = 9;
escolha1=1;
}else if (ver[3] === 3) {
  escolha1 = 3;
  logica();
}else if (ver[4] === 4) {
  escolha1 = 4;
  logica();
}else if (ver[7] === 7) {
  escolha1 = 7;
  logica();
}else if (ver[8] === 8) {
  rando=Math.floor(Math.random()*2)+1;
  if(rando===1){rando=3; escolha1=7}else{rando=9; escolha1=1}
}else if (ver[9] === 9) {
  escolha1 = 9;
  logica();
}
  }
 }
 
 else if(escolha1===8){
   if (click === 1) {
  rando = 5;
}
if(click===2){
  if(ver[1]===1){
    escolha1=1;
    logica()
  }else if (ver[3] === 3) {
  escolha1 = 3;
  logica();
}else if (ver[4] === 4) {
  escolha1 = 4;
  logica();
}else if (ver[6] === 6) {
  escolha1 = 6;
  logica();
}else if (ver[7] === 7) {
  escolha1 = 7;
  logica();
}else if (ver[9] === 9) {
  escolha1 = 9;
  logica();
}else if (ver[2] === 2) {
  rando=1
  escolha1 = 1;
}
}
 }
 else if (escolha1===5) {
   if(click===1){
     rando=Math.floor(Math.random()*4)+1;
     switch(rando){
       case 1:rando=1;break;case 2:rando=3;break;case 3:rando=7;break; default: rando=9;break;
     }
     
   }
   if(click===2){
     
     if((onde[1]===1)&& ver[9]===9 || onde[7]===7 && ver[3]===3){
       rando+=2;
     }else if(onde[3]===3 && ver[7]===7 || onde[9]===9&& ver[1]===1){
       rando-=2;
     }else if (ver[1] === 1 && ver[5] === 5 && onde[9] != 9) {
  rando = 9;
} else if (ver[9] === 9 && ver[5] === 5 && onde[1] != 1) {
  rando = 1;
} else if (ver[3] === 3 && ver[5] === 5 && onde[7] != 7) {
  rando = 7;
} else if (ver[7] === 7 && ver[5] === 5 && onde[3] != 3) {
  rando = 3;
} else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8) {
  rando = 8;
} else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2) {
  rando = 2;
} else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6) {
  rando = 6;
} else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4) {
  rando = 4;
}
     
   }if(click===3){
     if(onde[1]===1 && onde[3]===3 && ver[2]!=2){
       rando=2;
     }else if (onde[2] === 2 && onde[3] === 3 && ver[1] != 1) {
  rando = 1;
}else if (onde[2] === 2 && onde[1] === 1 && ver[3] != 3) {
  rando = 3;
}else if (onde[9] === 9 && onde[3] === 3 && ver[6] != 6) {
  rando = 6;
}else if (onde[1] === 1 && onde[4] === 4 && ver[7] != 7) {
  rando = 7;
}else if (onde[6] === 6 && onde[3] === 3 && ver[9] != 9) {
  rando = 9;
}else if (onde[9] === 9 && onde[7] === 7 && ver[8] != 8) {
  rando = 8;
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] != 4) {
  rando = 4;
}else if (ver[1] === 1 && ver[5] === 5 && onde[9] != 9) {
  rando = 9;
}else if (ver[9] === 9 && ver[5] === 5 && onde[1] != 1) {
  rando = 1;
}else if (ver[3] === 3 && ver[5] === 5 && onde[7] != 7) {
  rando = 7;
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] != 3) {
  rando = 3;
}else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8) {
  rando = 8;
}else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2) {
  rando = 2;
}else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6) {
  rando = 6;
}else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4) {
  rando = 4;
}
   }else if(click===4){
     if(ver[2]===2 && ver[5]===5 && onde[8]!=8){
       rando=8
     }else if (ver[2] === 2 && ver[1] === 1 && onde[3] != 3) {
  rando = 3;
}else{
     escolha1=1;
     logica()
     }
   }
 }
 x=1
}

let pi=0;
let id;
let vencedor;
let vencedor1;
let ven=document.getElementById('ven')
let imp=document.getElementById('imp')
let der=document.getElementById('der')
let impc=0;
let cvi=0
let cde=0;
function verifica() {
  
 let btn;
 let c=0;
 let escolha=Math.floor(Math.random()*20)
 
 switch (escolha) {
   case 0:
     vencedor="Boa ganhei-te"
     break;
   case 1:
     vencedor="Que pena perdeste!"
     break;
   case 2:
     vencedor="Desista me ganha, é impossível!"
     break;
   case 3:
     vencedor="Sou o melhor, perdeste de novo!"
     break;
   case 4:
     vencedor="Quem é o próximo a tentar?"
     break;
   case 5:
     vencedor="D.S.T \"Desista\" nunca vais me ganhar"
     break;
   case 6:
     vencedor="Tu es fraco! nunca vais me derrubar!"
     break;
   case 7:
     vencedor="Tu és bom, mas não o suficiente!"
     break;
   case 8:
     vencedor="Treina mais se quiseres me ganha!"
     break;
   case 9:
     vencedor="Máquina VS Humano quem é o melhor? R: Eu!"
     break;
   case 10:
     vencedor="Arruma as tuas coisas e vai-se!"
     break;
   case 11:
     vencedor="Chama alguém que sabe jogar!"
     break;
   
   case 12:
     vencedor="Próximo por favor!"
     break;
   case 13:
     vencedor="Mais você não se cansa de perder?"
     break;
   case 14:
     vencedor="Continuar estás quase lá!"
     break;
   case 15:
     vencedor="Desistir é para os fracos, continua!"
     break;
   case 16:
     vencedor="Queres me ganhar? treina mais!"
     break;
   case 17:
     vencedor="Jogo acabou! e tu perdeste!"
     break;
   case 18:
     vencedor="Treina mais, um dia podes me ganhar!"
     break;
   case 19:
     vencedor="Fogo, tu és bom, mais não o suficiente!"
     break;
   default:
   vencedor="Até que sabes jogar, mais... Perdeste!"
   break;
 }
 
 switch (escolha) {
   case 0:
     vencedor1="Oh, não perde!"
     break;
   case 1:
     vencedor1="Tu és bom, conseguiste me ganhar?"
     break;
   case 2:
     vencedor1="Desistir é para os fracos vamos continuar!"
     break;
   case 3:
     vencedor1="Tu és o melhor, perdi de novo!"
     break;
   case 4:
     vencedor1="Sem problema o próximo jogo vou ganhar?"
     break;
   case 5:
     vencedor1="Está na hora de jogar sério!"
     break;
   case 6:
     vencedor1="Teu tempo de brilhar acabou!"
     break;
   case 7:
     vencedor1="Porqueeeeeee, perde!"
     break;
   case 8:
     vencedor1="Prometo que vou aperfeiçoar as minhas jogadas!"
     break;
   case 9:
     vencedor1="Máquina VS Humano quem é o melhor? R: você"
     break;
   case 10:
     vencedor1="Como assim, não pode perdi?"
     break;
   case 11:
     vencedor1="oh não! foi derrotado!"
     break;
   
   case 12:
     vencedor1="Fogo tu és chato, sempre a me ganhar!"
     break;
   case 13:
     vencedor1="Como assim, perdi? R: Sim"
     break;
   case 14:
     vencedor1="Estou sem palavras, tu és bom!"
     break;
   case 15:
     vencedor1="Desistir é para os fracos, quero a desforra!"
     break;
   case 16:
     vencedor1="Isso não devia ter ocorrido, eu nunca posso perder!"
     break;
   case 17:
     vencedor1="Desta vês tiveste sorte!"
     break;
   case 18:
     vencedor1="Como tu humano conseguiste ganhar uma máquina?"
     break;
   case 19:
     vencedor1="Fogo, tu és bom, o suficiente para me derrubar!"
     break;
   default:
   vencedor="Desista já vais me ganhar mais! "
   break;
 }

  if(onde[1]===1 && onde[2]===2 && onde[3]===3 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=1; pi<=3; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
  
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   cde++;
   der.innerText="Pontos: "+cde
    
  } else  if (onde[1] === 1 && onde[4] === 4 && onde[7] === 7) {
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for (pi = 1; pi <= 7; pi+=3) {
      id = "bpc" + pi;
      document.getElementById(id).style.background = "green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    
    cde++;
der.innerText = "Pontos: " + cde
    
  }
  
   else if (onde[1] === 1 && onde[5] === 5 && onde[9] === 9) {
     document.getElementById('so1').style.display="block";
 
   for (pi = 1; pi <= 9; pi++) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "red";
   }
   
   for (pi = 1; pi <= 9; pi += 4) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "green";
   }
   
   
     for ( c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   
   document.getElementById('mostra1').innerText = vencedor
   document.getElementById('mostra1').style.display = "block"
   
  
  cde++;
der.innerText = "Pontos: " + cde
     
   }
 
  else if (onde[3] === 3 && onde[5] === 5 && onde[7] === 7) {
    document.getElementById('so1').style.display="block";
 
   for (pi = 1; pi <= 9; pi++) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "red";
   }
   
   for (pi = 3; pi <= 7; pi += 2) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "green";
   }
   
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   
   
   document.getElementById('mostra1').innerText = vencedor
   document.getElementById('mostra1').style.display = "block"
   cde++;
der.innerText = "Pontos: " + cde
 }
 
   else if(onde[1]===1 && onde[4]===4 && onde[7]===7 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=1; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    cde++;
der.innerText = "Pontos: " + cde
  } 
  
   else if(onde[8]===8 && onde[2]===2 && onde[5]===5 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=2; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    cde++;
der.innerText = "Pontos: " + cde
  } 
  
  else  if(onde[4]===4 && onde[6]===6 && onde[5]===5 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=4; pi<=6; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for ( c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    cde++;
der.innerText = "Pontos: " + cde
  } 
  
   else if(onde[7]===7 && onde[8]===8 && onde[9]===9){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=7; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for ( c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    cde++;
der.innerText = "Pontos: " + cde
  } 
  
   else if(onde[3]===3 && onde[6]===6 && onde[9]===9 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=3; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for ( c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor
    document.getElementById('mostra1').style.display="block"
    cde++;
der.innerText = "Pontos: " + cde
  }
  
  //Trabalhando com o ver
  
  else if(ver[1]===1 && ver[2]===2 && ver[3]===3 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=1; pi<=3; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    cvi++;
    ven.innerText = "Pontos: " + cvi
  } 
  else  if (ver[1] === 1 && ver[4] === 4 && ver[7] === 7) {
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for (pi = 1; pi <= 7; pi+=3) {
      id = "bpc" + pi;
      document.getElementById(id).style.background = "green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  }
  
   else if (ver[1] === 1 && ver[5] === 5 && ver[9] === 9) {
     document.getElementById('so1').style.display="block";
 
   for (pi = 1; pi <= 9; pi++) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "red";
   }
   
   for (pi = 1; pi <= 9; pi += 4) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "green";
   }
   
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   
   document.getElementById('mostra1').innerText = vencedor1
   document.getElementById('mostra1').style.display = "block"
   
    cvi++;
    ven.innerText = "Pontos: " + cvi
 }
 
  else if (ver[3] === 3 && ver[5] === 5 && ver[7] === 7) {
    document.getElementById('so1').style.display="block";
 
   for (pi = 1; pi <= 9; pi++) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "red";
   }
   
   for (pi = 3; pi <= 7; pi += 2) {
     id = "bpc" + pi;
     document.getElementById(id).style.background = "green";
   }
   
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
   document.getElementById('mostra1').innerText = vencedor1
   document.getElementById('mostra1').style.display = "block"
   
    cvi++;
    ven.innerText = "Pontos: " + cvi
 }
 
   else if(ver[1]===1 && ver[4]===4 && ver[7]===7 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=1; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  } 
  
   else if(ver[8]===8 && ver[2]===2 && ver[5]===5 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=2; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  } 
  
  else  if(ver[4]===4 && ver[6]===6 && ver[5]===5 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=4; pi<=6; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  } 
  
   else if(ver[7]===7 && ver[8]===8 && ver[9]===9){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=7; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  } 
  
   else if(ver[3]===3 && ver[6]===6 && ver[9]===9 ){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
    for( pi=3; pi<=9; pi+=3){
      id="bpc"+pi;
      document.getElementById(id).style.background="green";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    document.getElementById('mostra1').innerText=vencedor1
    document.getElementById('mostra1').style.display="block"
    
    cvi++;
    ven.innerText = "Pontos: " + cvi
  }
   
  
   // empate 
   else if(click===5 || onde.length===5){
    document.getElementById('so1').style.display="block";
 
    for( pi=1; pi<=9; pi++){
      id="bpc"+pi;
      document.getElementById(id).style.background="red";
    }
    
     for (c = 1; c <= 9; c++) {
  btn = "bpc" + c;
  document.getElementById(btn).disabled = true;
 }
 clearInterval(contando)
 clearInterval(cmaq);
 document.getElementById('eu').style.background = 'none';
 
   document.getElementById('maq').style.background='none';
    
    impc++;
    imp.innerText = "Empate "+impc
    document.getElementById('mostra1').innerText="Jogo empatado!"
    document.getElementById('mostra1').style.display="block"
  
    if(troca===0){
    troca++;
    }
    else{
     
      troca=0;
    }
  }
  
  
}

function estra() {
 if(click===0){
   rando=Math.floor(Math.random()*4)+1
   
 switch (rando) {
   case 1:
    rando=1
    escolha1=0;
     break;
     case 2:
       rando=3
       escolha1=1;
       break;
       case 3:
         rando=7;
         escolha1=7;
         break;
         case 4:
           rando=9;
           escolha1=4;
           break;
           
   default:
     rando=5
     escolha1=5;
     break;
 }
 }

//quando o computador inicia com 1
if(escolha1===0){
//primeiro click
if(click===1){
   if (ver[5] === 5) {
  escolha1=9;
}
   if(onde[1]===1 && ver[4]!==4&& ver[7]!=7 && ver[5]!=5){
     rando=7;
   }else if(onde[1]===1 && ver[4]===4 && ver[3]!=3 && ver[5]!=5){
     rando=3;
   } else  if(onde[1]===1 && ver[7]===7 && ver[5]!=5){
     rando=9;
   }
   //segundo click
 }else if(click===2){
    if(onde[1]===1 && onde[7]===7 && ver[4]!=4){
     rando=4;
   }else if (onde[1] === 1 && onde[3] === 3 && ver[2] !== 2) {
  rando = 2;
}else if (ver[6] === 6 && ver[4] === 4 && onde[5] != 5) {
  rando = 5;
}else  if(onde[1]===1 && onde[7]===7 && ver[4]===4 && ver[3]!=3 && ver[2]!==2){
     rando=3;
   } else if (onde[1] === 1 && onde[7] === 7 && ver[4] === 4 && ver[3] != 3 && ver[2] === 2) {
  rando = 9;
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] === 4 && ver[9] != 9) {
  rando = 9;
}else if (onde[1] === 1 && onde[3] === 3 && ver[2] === 2 && ver[4]===4) {
  rando = 9;
} else if (onde[1] === 1 && onde[9] === 9 && ver[5] !== 5) {
  rando = 5;
}else if (onde[1] === 1 && onde[9] === 9 && ver[5] === 5 && ver[7]===7) {
  rando = 3;
}
 
 
 }
 //Terceiro click
else if(click===3){
  
 if (onde[1] === 1 && onde[9] === 9 && ver[5] !== 5 && onde[5]!==5) {
  rando = 5;
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] != 4 && onde[4] != 4) {
  rando = 4;
}else if (onde[1] === 1 && onde[3] === 3 && ver[2] !== 2 && onde[2] !== 2) {
  rando = 2;
}else if (onde[3] === 3 && onde[9] === 9 && ver[6] !== 6 && onde[6] !== 6) {
  rando = 6;
}else if (onde[1] === 1 && onde[5] === 5 && ver[9] !== 9 && onde[9] !== 9 ) {
  rando = 9;
}else if (onde[7] === 7 && onde[5] === 5 && ver[3] !== 3 && onde[3] !== 3) {
  rando = 3;
}else if (onde[9] === 9 && onde[5] === 5 && ver[1] !== 1 && onde[1] !== 1) {
  rando = 1;
}else if (onde[9] === 9 && onde[7] === 7 && ver[8] !== 8 && ver[5] === 5 && onde[8] != 8) {
  rando = 8;
}else  if (onde[1] === 1 && onde[9] === 9 && ver[5] === 5 && onde[6] !== 6 && ver[2]===2) {
   rando = 6;
 } else if (onde[1] === 1 && onde[7] === 7 && ver[5] !== 5 && onde[5] !== 5) {
   rando = 5;
 } 
}
}
// quando o computador inicia com 3
else if(escolha1===1){
//primeiro click
 if(click===1){
      if (ver[5] === 5) {
     escolha1 = -3;
   }
   if(onde[3]===3 && ver[6]!==6&& ver[9]!=9 && ver[5]!=5){
     rando=9;
   }else if(onde[3]===3 && ver[6]===6 && ver[1]!=1 && ver[5]!=5){
     rando=1;
   } else  if(onde[3]===3 && ver[9]===9 && ver[5]!=5){
     rando=7;
   }
   //segundo click
 }else if(click===2){
    if(onde[3]===3 && onde[9]===9 && ver[6]!=6  ){
     rando=6;
   }else if (onde[3] === 3 && onde[1] === 1 && ver[2] !== 2 && onde[2] !== 2) {
  rando = 2;
}else if (onde[2] === 2 && onde[3] === 3 && ver[1] !== 1 && onde[1] !== 1) {
  rando = 1;
}else if (ver[4] === 4 && ver[6] === 6 && onde[5] != 5) {
  rando = 5;
}else if (onde[3] === 3 && onde[9] === 9 && ver[6] === 6 && ver[7]!==7 && onde[7]!==7 && ver[8]!==8 ) {
    rando = 7;
  }else if (onde[3] === 3 && onde[9] === 9 && ver[6] === 6 && onde[1] !== 1 && ver[8] === 8) {
  rando = 1;
}else  if(onde[3]===3 && onde[9]===9 && ver[6]===6 && ver[1]!=1 && ver[2]!==2){
     rando=1;
   } else if (onde[3] === 3 && onde[9] === 9 && ver[6] === 6 && ver[1] != 1 && ver[2] === 2) {
  rando = 7;
}else if (onde[3] === 3 && onde[9] === 9 && ver[6] === 6 && ver[7] != 7) {
  rando = 9;
}else if (onde[3] === 3 && onde[1] === 1 && ver[2] === 2 && ver[6]===6) {
  rando = 7;
} else if (onde[3] === 3 && onde[7] === 7 && ver[5] !== 5) {
  rando = 5;
}else if (onde[3] === 3 && onde[7] === 7 && ver[5] === 5 && ver[9]===9) {
  rando = 1;
}
 
 
 }
 //Terceiro click
else if(click===3){
 if (onde[3] === 3 && onde[7] === 7 && ver[5] !== 5 && onde[5]!==5) {
  rando = 5;
}else if (onde[3] === 3 && ver[9] !== 9 && ver[6] != 6 && onde[6] != 6) {
  rando = 6;
}else if (onde[2] === 2 && onde[3] === 3 && ver[1] !== 1 && onde[1] !== 1) {
  rando = 1;
}else if (onde[3] === 3 && onde[1] === 1 && ver[2] !== 2 && onde[2] !== 2) {
  rando = 2;
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] !== 4 && onde[4] !== 4) {
  rando = 4;
}else if (onde[3] === 3 && onde[5] === 5 && ver[7] !== 7 && onde[7] !== 7) {
  rando = 7;
}else if (onde[9] === 9 && onde[5] === 5 && ver[1] !== 1 && onde[1] !== 1) {
  rando = 1;
}else if (onde[7] === 7 && onde[5] === 5 && ver[3] !== 3 && onde[3] !== 3) {
  rando = 3;
}else if (onde[7] === 7 && onde[9] === 9 && ver[8] !== 8 && ver[5] === 5 && onde[8] != 8) {
  rando = 8;
}else  if (onde[3] === 3 && onde[7] === 7 && ver[5] === 5 && onde[4] !== 4 && ver[2]===2) {
   rando = 4;
 } else if (onde[3] === 3 && onde[9] === 9 && ver[5] !== 5 && onde[5] !== 5) {
   rando = 5;
 } 
}
}
//quando o computador inicia com 9
else if(escolha1===4){
//primeiro click
if(click===1){
   if (ver[5] === 5) {
  escolha1=-4;
}
   if(onde[9]===9 && ver[6]!==6&& ver[3]!=3 && ver[5]!=5){
     rando=3;
   }else if(onde[9]===9 && ver[6]===6 && ver[7]!=7 && ver[5]!=5){
     rando=7;
   } else  if(onde[9]===9 && ver[3]===3 && ver[5]!=5){
     rando=1;
   }
   //segundo click
 }else if(click===2){
    if(onde[9]===9 && onde[3]===3 && ver[6]!=6){
     rando=6;
   }else if (onde[9] === 9 && onde[7] === 7 && ver[8] !== 8) {
  rando = 8;
}else if (ver[4] === 4 && ver[6] === 6 && onde[5] != 5) {
  rando = 5;
}else  if(onde[9]===9 && onde[3]===3 && ver[6]===6 && ver[7]!=7 && ver[8]!==8){
     rando=7;
   } else if (onde[9] === 9 && onde[3] === 3 && ver[6] === 6 && ver[7] != 7 && ver[8] === 8) {
  rando = 1;
}else if (onde[9] === 9 && onde[3] === 3 && ver[6] === 6 && ver[1] != 1) {
  rando = 1;
}else if (onde[9] === 9 && onde[7] === 7 && ver[8] === 8 && ver[6]===6) {
  rando = 1;
} else if (onde[9] === 9 && onde[1] === 1 && ver[5] !== 5) {
  rando = 5;
}else if (onde[9] === 9 && onde[1] === 1 && ver[5] === 5 && ver[3]===3) {
  rando = 7;
}
 
 
 }
 //Terceiro click
else if(click===3){
  
 if (onde[9] === 9 && onde[1] === 1 && ver[5] !== 5 && onde[5]!==5) {
  rando = 5;
}else if (onde[9] === 9 && onde[3] === 3 && ver[6] != 6 && onde[6] != 6) {
  rando = 6;
}else if (onde[9] === 9 && onde[7] === 7 && ver[8] !== 8 && onde[8] !== 8) {
  rando = 8;
}else if (onde[7] === 7 && onde[1] === 1 && ver[4] !== 4 && onde[4] !== 4) {
  rando = 4;
}else if (onde[9] === 9 && onde[5] === 5 && ver[1] !== 1 && onde[1] !== 1 ) {
  rando = 1;
}else if (onde[3] === 3 && onde[5] === 5 && ver[7] !== 7 && onde[7] !== 7) {
  rando = 7;
}else if (onde[1] === 1 && onde[5] === 5 && ver[9] !== 9 && onde[9] !== 9) {
  rando = 9;
}else if (onde[1] === 1 && onde[3] === 3 && ver[2] !== 2 && ver[5] === 5 && onde[2] != 2) {
  rando = 2;
}else  if (onde[9] === 9 && onde[1] === 1 && ver[5] === 5 && onde[4] !== 4 && ver[8]===8) {
   rando = 4;
 } else if (onde[9] === 9 && onde[3] === 3 && ver[5] !== 5 && onde[5] !== 5) {
   rando = 5;
 } 
}
}

// quando o computador inicia com 7
else if(escolha1===7){
//primeiro click

 if(click===1){
      if (ver[5] === 5) {
     escolha1 = -7;
   }
   if(onde[7]===7 && ver[4]!==4 && ver[1]!=1 && ver[5]!=5){
     rando=1;
   }else if(onde[7]===7 && ver[4]===4 && ver[9]!=9 && ver[5]!=5){
     rando=9;
   } else  if(onde[7]===7 && ver[1]===1 && ver[5]!=5){
     rando=3;
   }
   //segundo click
 }else if(click===2){
    if(onde[7]===7 && onde[1]===1 && ver[4]!==4  ){
     rando=4;
   }else if (onde[3] === 3 && onde[2] === 2 && ver[1] != 1 && onde[1] != 1) {
   rando = 1;
 }else if (onde[7] === 7 && onde[9] === 9 && ver[8] !== 8 && onde[8] !== 8) {
  rando = 8;
}else if (onde[8] === 8 && onde[7] === 7 && ver[9] !== 9 && onde[9] !== 9) {
  rando = 9;
}else if (ver[6] === 6 && ver[4] === 4 && onde[5] != 5) {
  rando = 5;
}else if (onde[7] === 7 && onde[1] === 1 && ver[4] === 4 && ver[3]!==3 && onde[3]!==3 && ver[2]!==2 ) {
    rando = 3;
  }else if (onde[7] === 7 && onde[1] === 1 && ver[4] === 4 && onde[9] !== 9 && ver[2] === 2) {
  rando = 9;
}else  if(onde[7]===7 && onde[1]===1 && ver[4]===4 && ver[9]!=9 && ver[8]!==8){
     rando=9;
   } else if (onde[7] === 7 && onde[1] === 1 && ver[4] === 4 && ver[9] != 9 && ver[8] === 8) {
  rando = 3;
}else if (onde[7] === 7 && onde[1] === 1 && ver[4] === 4 && ver[3] != 3) {
  rando = 1;
}else if (onde[7] === 7 && onde[9] === 9 && ver[8] === 8 && ver[4]===4) {
  rando = 3;
} else if (onde[7] === 7 && onde[3] === 3 && ver[5] !== 5) {
  rando = 5;
}else if (onde[7] === 7 && onde[3] === 3 && ver[5] === 5 && ver[1]===1) {
  rando = 9;
}
 
 
 }
 //Terceiro click
else if(click===3){
 if (onde[7] === 7 && onde[3] === 3 && ver[5] !== 5 && onde[5]!==5) {
  rando = 5;
}else if (onde[3] === 3 && onde[2] === 2 && ver[1] != 1 && onde[1] != 1) {
  rando = 1;
}else if (onde[7] === 7 && ver[1] !== 1 && ver[4] != 4 && onde[4] != 4) {
  rando = 4;
}else if (onde[8] === 8 && onde[7] === 7 && ver[9] !== 9 && onde[9] !== 9) {
  rando = 9;
}else if (onde[7] === 7 && onde[9] === 9 && ver[8] !== 8 && onde[8] !== 8) {
  rando = 8;
}else if (onde[9] === 9 && onde[3] === 3 && ver[6] !== 6 && onde[6] !== 6) {
  rando = 6;
}else if (onde[7] === 7 && onde[5] === 5 && ver[3] !== 3 && onde[3] !== 3) {
  rando = 3;
}else if (onde[1] === 1 && onde[5] === 5 && ver[9] !== 9 && onde[9] !== 9) {
  rando = 9;
}else if (onde[3] === 3 && onde[5] === 5 && ver[7] !== 7 && onde[7] !== 7) {
  rando = 7;
}else if (onde[3] === 3 && onde[1] === 1 && ver[2] !== 2 && ver[5] === 5 && onde[2] != 2) {
  rando = 2;
}else  if (onde[7] === 7 && onde[3] === 3 && ver[5] === 5 && onde[6] !== 6 && ver[8]===8) {
   rando = 6;
 } else if (onde[7] === 7 && onde[1] === 1 && ver[5] !== 5 && onde[5] !== 5) {
   rando = 5;
 } 
}
}

//quando clicar no 5
if(escolha1===9){
  //primeiro click
  if(click===1){
  if(onde[1]===1 && onde[9]!=9){
    rando=9
  }
  //segundo click
  }else if(click===2){
    if (onde[1] === 1 && onde[9] === 9 && ver[7]===7 && ver[3]!==3) {
  rando = 3
  escolha1=0;
}else if (onde[1] === 1 && onde[9] === 9 && ver[3] === 3 && ver[7]!=7) {
  rando = 7
  escolha1 = 1;
}else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6 && ver[6] != 6) {
  rando = 6;
}else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4 && ver[4] != 4) {
  rando = 4;
}else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8 && ver[8] != 8) {
  rando = 8;
}else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2 && ver[2] != 2) {
  rando = 2;
}
  }
  //Terceiro click
  else if(click===3){
    if(onde[1]===1 && onde[4]===4 && onde[7]!==7 && ver[7]!==7){
      rando=7;
    }else if (onde[9] === 9 && onde[6] === 6 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}else if (onde[1] === 1 && onde[2] === 2 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}else if (onde[9] === 9 && onde[8] === 8 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}else if (ver[3] === 3 && ver[5] === 5 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}else if (ver[1] === 1 && ver[5] === 5 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}
  }
  //Último toque
  else if (click===4) {
    for(let simo=1; simo<9; simo++){
      if(ver[simo]!==simo && onde[simo]!==simo){
        rando=simo
        click=5;
       break;
      }
    }
  }
}
// segundo escolha1=-3
if(escolha1===-3){
  //primeiro click
  if(click===1){
  if(onde[3]===3 && onde[7]!=7){
    rando=7
  }
  //segundo click
  }else if(click===2){
   
    if (onde[3] === 3 && onde[7] === 7 && ver[9]===9 && ver[1]!==1) {
  rando = 1
  escolha1=0;
  
}else if (onde[3] === 3 && onde[7] === 7 && ver[1] === 1 && ver[9]!=9) {
  rando = 9
//  escolha1 = 1;
}else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4 && ver[4] != 4) {
  rando = 4;
}else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6 && ver[6] != 6) {
  rando = 6;
}else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2 && ver[2] != 2) {
  rando = 2;
}else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8 && ver[8] != 8) {
  rando = 8;
}
  }
  //Terceiro click
  else if(click===3){
    
    if(onde[3]===3 && onde[6]===6 && onde[9]!==9 && ver[9]!==9){
      rando=9;
    }else if (onde[3] === 3 && onde[9] === 9 && ver[6] !== 6 && onde[6] !== 6) {
  rando = 6
}else if (onde[7] === 7 && onde[9] === 9 && ver[8] !== 8 && onde[8] !== 8) {
  rando = 8
}else if (onde[7] === 7 && onde[4] === 4 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}else if (onde[3] === 3 && onde[8] === 8 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}else if (onde[7] === 7 && onde[2] === 2 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}else if (ver[1] === 1 && ver[5] === 5 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}else if (ver[3] === 3 && ver[5] === 5 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}else if (ver[9] === 9 && ver[5] === 5 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}
  }
  //Último toque
  else if (click===4) {
    for(let simo=1; simo<9; simo++){
      if(ver[simo]!==simo && onde[simo]!==simo){
        rando=simo
        click=5;
       break;
      }
    }
  }
}
// Terceiro escolha1=4
if(escolha1===-4){
  //primeiro click
  if(click===1){
  if(onde[9]===9 && onde[1]!=1){
    rando=1
  }
  //segundo click
  }else if(click===2){
    if (onde[9] === 9 && onde[1] === 1 && ver[3]===3 && ver[7]!==7) {
  rando = 7
  escolha1=4;
}else if (onde[9] === 9 && onde[1] === 1 && ver[7] === 7 && ver[3]!==3) {
  rando = 3
  escolha1 = 1;
}else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4 && ver[4] != 4) {
  rando = 4;
}else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6 && ver[6] != 6) {
  rando = 6;
}else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2 && ver[2] != 2) {
  rando = 2;
}else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8 && ver[8] != 8) {
  rando = 8;
}
  }
  //Terceiro click
  else if(click===3){
    if(onde[9]===9 && onde[6]===6 && onde[3]!==3 && ver[3]!==3){
      rando=3;
    }else if (onde[1] === 1 && onde[4] === 4 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}else if (onde[9] === 9 && onde[8] === 8 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}else if (onde[1] === 1 && onde[2] === 2 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}else if (ver[9] === 9 && ver[5] === 5 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}else if (ver[3] === 3 && ver[5] === 5 && onde[7] !== 7 && ver[7] !== 7) {
  rando = 7;
}
  }
  //Último toque
  else if (click===4) {
    for(let simo=1; simo<9; simo++){
      if(ver[simo]!==simo && onde[simo]!==simo){
        rando=simo
        click=5;
       break;
      }
    }
  }
}

// segundo escolha1=-3
if(escolha1===-7){
 
  //primeiro click
  if(click===1){
  if(onde[7]===7 && onde[3]!=3){
    rando=3
  }
  //segundo click
  }else if(click===2){
   
    if (onde[7] === 7 && onde[3] === 3 && ver[1]===1 && ver[9]!==9) {
  rando = 9
 escolha1=7;
  
}else if (onde[3] === 3 && onde[2] === 2 && ver[1] != 1 && onde[1] != 1) {
  rando = 1;
}else if (onde[7] === 7 && onde[8] === 8 && ver[9] != 9 && onde[9] != 9) {
  rando = 9;
} else if (onde[7] === 7 && onde[3] === 3 && ver[9] === 9 && ver[1]!=1) {
  rando = 1
//  escolha1 = 1;
}else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6 && ver[6] != 6) {
  rando = 6;
}else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4 && ver[4] != 4) {
  rando = 4;
}else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8 && ver[8] != 8) {
  rando = 8;
}else if (ver[8] === 8 && ver[5] === 5 && onde[2] != 2 && ver[2] != 2) {
  rando = 2;
}
  }
  //Terceiro click
  else if(click===3){
    
    if(onde[7]===7 && onde[4]===4 && onde[1]!==1 && ver[1]!==1){
      rando=1;
    }else if (onde[3] === 3 && onde[2] === 2 && ver[1] != 1 && onde[1] != 1) {
  rando = 1;
}else if (onde[7] === 7 && onde[8] === 8 && ver[9] != 9 && onde[9] != 9) {
  rando = 9;
}else if (onde[7] === 7 && onde[1] === 1 && ver[4] !== 4 && onde[4] !== 4) {
  rando = 4
}else if (onde[3] === 3 && onde[1] === 1 && ver[2] !== 2 && onde[2] !== 2) {
  rando = 2
}else if (onde[3] === 3 && onde[6] === 6 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}else if (onde[7] === 7 && onde[2] === 2 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}else if (onde[3] === 3 && onde[8] === 8 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}else if (ver[9] === 9 && ver[5] === 5 && onde[1] !== 1 && ver[1] !== 1) {
  rando = 1;
}else if (ver[7] === 7 && ver[5] === 5 && onde[3] !== 3 && ver[3] !== 3) {
  rando = 3;
}else if (ver[1] === 1 && ver[5] === 5 && onde[9] !== 9 && ver[9] !== 9) {
  rando = 9;
}
  }
  //Último toque
  else if (click===4) {
    for(let simo=1; simo<9; simo++){
      if(ver[simo]!==simo && onde[simo]!==simo){
        rando=simo
        click=5;
       break;
      }
    }
  }
}
// se começar com 5

  x=1;
  log = "bpc" + rando;
        document.getElementById(log).innerText = maq;
        
        btv[rando] = rando;
        pc[click] = rando;
        onde[rando] = rando;
   return;
}

function facil1() {
// for(let fc=1; fc<=9; fc++){
   if(onde[1]===1 && onde[2]===2 && ver[3]!=3){
     rando=3;
     
   }else if (onde[1] === 1 && onde[3] === 3 && ver[2] != 2) {
  rando = 2;
  
}else if (onde[3] === 3 && onde[2] === 2 && ver[1] != 1) {
  rando = 1;
  
}else if (onde[1] === 1 && onde[4] === 4 && ver[7] != 7) {
  rando = 7;
  
}else if (onde[1] === 1 && onde[7] === 7 && ver[4] != 4) {
  rando = 4;
  
}else if (onde[4] === 4 && onde[7] === 7 && ver[1] != 1) {
  rando = 1;
  
}else if (onde[1] === 1 && onde[5] === 5 && ver[9] != 9) {
  rando = 9;
  
}else if (onde[1] === 1 && onde[9] === 9 && ver[5] != 5) {
  rando = 5;
  
}else if (onde[9] === 9 && onde[5] === 5 && ver[1] != 1) {
  rando = 1;
  
}
//caso 3
  else if (onde[3] === 3 && onde[7] === 7 && ver[5] != 5) {
     rando = 5;
     
   } else if (onde[3] === 3 && onde[5] === 5 && ver[7] != 7) {
     rando = 7;
     
   } else if (onde[7] === 7 && onde[5] === 5 && ver[3] != 3) {
     rando = 3;
     
   } else if (onde[3] === 3 && onde[9] === 9 && ver[6] != 6) {
     rando = 6;
     
   } else if (onde[3] === 3 && onde[6] === 6 && ver[9] != 9) {
     rando = 9;
     
   } else if (onde[9] === 9 && onde[6] === 6 && ver[3] != 3) {
     rando = 3;
     
   }
   //começando com 7
   else if (onde[7] === 7 && onde[8] === 8 && ver[9] != 9) {
     rando = 9;
     
   } else if (onde[7] === 7 && onde[9] === 9 && ver[8] != 8) {
     rando = 8;
     
   } else if (onde[9] === 9 && onde[8] === 8 && ver[7] != 7) {
     rando = 7;
     
   }
   // começando com 4 
    else if (onde[4] === 4 && onde[6] === 6 && ver[5] != 5) {
   rando = 5;
   
 } else if (onde[4] === 4 && onde[5] === 5 && ver[6] != 6) {
   rando = 6;
   
 } else if (onde[6] === 6 && onde[5] === 5 && ver[4] != 4) {
   rando = 4;
   
 
 }
 // começando com 2
  else if (onde[2] === 2 && onde[8] === 8 && ver[5] != 5) {
   rando = 5;
   
 } else if (onde[2] === 2 && onde[5] === 5 && ver[8] != 8) {
   rando = 8;
   
 } else if (onde[5] === 5 && onde[8] === 8 && ver[2] != 2) {
   rando = 2;
   
 }
 //trabando com ver
 else if (ver[1] === 1 && ver[2] === 2 && onde[3] != 3) {
  rando = 3;
  
} else if (ver[1] === 1 && ver[3] === 3 && onde[2] != 2) {
  rando = 2;
  
} else if (ver[3] === 3 && ver[2] === 2 && onde[1] != 1) {
  rando = 1;
  
} else if (ver[1] === 1 && ver[4] === 4 && onde[7] != 7) {
  rando = 7;
  
} else if (ver[1] === 1 && ver[7] === 7 && onde[4] != 4) {
  rando = 4;
  
} else if (ver[4] === 4 && ver[7] === 7 && onde[1] != 1) {
  rando = 1;
  
} else if (ver[1] === 1 && ver[5] === 5 && onde[9] != 9) {
  rando = 9;
  
} else if (ver[1] === 1 && ver[9] === 9 && onde[5] != 5) {
  rando = 5;
  
} else if (ver[9] === 9 && ver[5] === 5 && onde[1] != 1) {
  rando = 1;
  
}
//caso 3
else if (ver[3] === 3 && ver[7] === 7 && onde[5] != 5) {
  rando = 5;
  
} else if (ver[3] === 3 && ver[5] === 5 && onde[7] != 7) {
  rando = 7;
  
} else if (ver[7] === 7 && ver[5] === 5 && onde[3] != 3) {
  rando = 3;
  
} else if (ver[3] === 3 && ver[9] === 9 && onde[6] != 6) {
  rando = 6;
  
} else if (ver[3] === 3 && ver[6] === 6 && onde[9] != 9) {
  rando = 9;
  
} else if (ver[9] === 9 && ver[6] === 6 && onde[3] != 3) {
  rando = 3;
  
}
//começando com 7
else if (ver[7] === 7 && ver[8] === 8 && onde[9] != 9) {
  rando = 9;
  
} else if (ver[7] === 7 && ver[9] === 9 && onde[8] != 8) {
  rando = 8;
  
} else if (ver[9] === 9 && ver[8] === 8 && onde[7] != 7) {
  rando = 7;
  
}
// começando com 4 
else if (ver[4] === 4 && ver[6] === 6 && onde[5] != 5) {
  rando = 5;
  
} else if (ver[4] === 4 && ver[5] === 5 && onde[6] != 6) {
  rando = 6;
  
} else if (ver[6] === 6 && ver[5] === 5 && onde[4] != 4) {
  rando = 4;
  
  
}
// começando com 2
else if (ver[2] === 2 && ver[8] === 8 && onde[5] != 5) {
  rando = 5;
  
} else if (ver[2] === 2 && ver[5] === 5 && onde[8] != 8) {
  rando = 8;
  
} else if (ver[5] === 5 && ver[8] === 8 && onde[2] != 2) {
  rando = 2;
  
}
else{
  rando=Math.floor(Math.random()*9)+1;
  if(rando>9){
    rando=9
  }
  if(ver[rando]===rando || onde[rando]===rando){
    facil1()
  }
  check=0
 for(let veriff=1; veriff<=9; veriff++){
   if (ver[veriff] === veriff || onde[veriff] === veriff) {
  check++;
}
 }

  if(click===4 && check===9){
    click=5;
  }
}
 
    
 
   log="bpc"+rando;
   document.getElementById(log).innerText=maq;
   
   btv[rando]=rando;
      pc[click]=rando;
      onde[rando]=rando;
  }