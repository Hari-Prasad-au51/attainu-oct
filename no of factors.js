let n=require("prompt-sync")()("enter number: ");
let ct=0;
for(let i=1;i<=n;i++){
  if(n%i==0){
    ct++;
    console.log(i);
  }
  }
console.log("no of factors",ct);