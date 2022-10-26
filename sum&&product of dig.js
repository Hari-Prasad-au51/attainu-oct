let n=require("prompt-sync")()("enter a number: ");
let sum=0;
let pd=1;
for(i=n;i!=0;i=parseInt(i/10)){
  let dig=i%10;
  sum=sum+dig;
  pd=pd*dig;
  }
console.log("sum of digits: ",sum);
console.log("product of digits: ",pd);