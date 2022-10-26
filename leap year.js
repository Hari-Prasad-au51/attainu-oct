var x=1900;
if(x%4==0){
  if(x%100==0){
    if(x%400==0){
      console.log("leap");
    }
    else{
      console.log("nonleap");
    }
    
  }
  else{
    console.log("leap");
  }
}
else{
  console.log("non leap");
}

