let n=require("prompt-sync")()("enter number: ");
let sum=0;
for(let i=1;i<=n;i++){
  if(n%i==0){
    console.log(i);
    sum=sum+i;
  }
}
console.log("sum of factors", sum);
