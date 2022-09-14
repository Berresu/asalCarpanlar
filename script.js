let button=document.getElementById("hesapla");
button.addEventListener("click", ()=>{
  let sayi=document.getElementById("sayi");
  let sonuc=document.getElementById("sonuc");
  
  let kalan1=sayi/5;
  
  let kalan2=kalan1/3;
  
  let kalan3=kalan2/2;

  if(kalan1!==1){
    sonuc.innerHTML=kalan1;
    
    if(kalan2!==1){
      sonuc.innerHTML=kalan1+" "+kalan2;
    }
    else if(kalan2==1){
      sonuc.innerHTML=kalan1+" "+kalan2;
    }
    else if(kalan3==1){
      sonuc.innerHTML=kalan1+" "+kalan2+" "+kalan3;
    }
  }
  else{
    sonuc.innerHTML=kalan1;
  }
})
