let a=require("prompt-sync")()("enter number: ");
let b=require("prompt-sync")()("enter number: ");
let c=require("prompt-sync")()("enter number: ");
let lrg=0;
if(a>=b&&a>=c){
  lrg=a;
}
else if(b>=c&&b>=a){
  lrg=b;
}
else{
  lrg=c;
}
if(2*(lrg**2)==a**2+b**2+c**2){
  console.log("2");
}
else if(2*(lrg**2)>=a**2+b**2+c**2){
  console.log("3");
}
else{
  console.log("1");
}