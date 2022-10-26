let n=require("prompt-sync")()("enter number: ");
for(let i=1;i<=n;i++){
  if(n%i==0){
    console.log(i);
  }
}