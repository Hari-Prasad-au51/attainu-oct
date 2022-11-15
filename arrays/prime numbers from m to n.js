let n=Number(require("prompt-sync")()("enter number :"))
let m=Number(require("prompt-sync")()("enter number :"))
let a=[]
for(let i=n;i<=m;i++){
  let ct=0;
  for(let j=1;j<=i;j++){
    if(i%j==0){
      ct++;
    }
    
     }
  if (ct==2){
    a.push(i)
     
}
}
console.log(a)