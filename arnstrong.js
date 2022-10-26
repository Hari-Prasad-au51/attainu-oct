let n=require("prompt-sync")()("enter number: ");
let sum=0;
for(let i=n;i!=0;i=parseInt(i/10)){
   let dig=i%10;
  sum=sum+(dig**3);
}
if(sum==n){//use ==,dont use===
  console.log("armstrong");
  }
else{
  console.log("not a armstrong");
}