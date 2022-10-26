let a=require("prompt-sync")()("enter bill amount: ");
if(a<=100){
  console.log(a*15);
}
else if(a>100&&a<=200){
  console.log(100*15+(a-100)*14);
}
else{
  console.log(100*15+100*14+(a-200)*12);
}