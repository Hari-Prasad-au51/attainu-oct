let n=require("prompt-sync")()("enter number: ");
let prod=1;
for(let i=1;i<=n;i++){
  prod=prod*i;
}
console.log(prod);