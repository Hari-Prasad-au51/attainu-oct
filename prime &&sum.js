let n=require("prompt-sync")()("enter a number: ");
let sum=0;
for(let i=1;i<=n;i++){
  let ct=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){
      ct++
    }
     }
  if(ct==2){
    console.log(i);
    sum=sum+i;
     }
}
console.log("sum=",sum)