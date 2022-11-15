 let n=Number(require("prompt-sync")()("enter array length :"))
let m=Number(require("prompt-sync")()("enter array length :"))
let sum=0;
for(let i=n;i<=m;i++){
  let ct=0;
  for (let j=1;j<=i;j++){
    if(i%j==0){
      ct++
    }
  }
  if(ct==2){
    sum=sum+i
  }
}
console.log(sum)