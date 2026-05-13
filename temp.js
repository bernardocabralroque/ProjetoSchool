
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
  }else{
    
  }
  
}
 

    
 
   log="bpc"+rando;
   document.getElementById(log).innerText=maq;
   
   btv[rando]=rando;
      pc[click]=rando;
      onde[rando]=rando;
  }