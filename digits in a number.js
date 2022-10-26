let n=require("prompt-sync")()("enter number: ");
let dig=0;
for(let i=n;i!=0;i=parseInt(i/10)){
  dig=i%10
  console.log(dig);
}

