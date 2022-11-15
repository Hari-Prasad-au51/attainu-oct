let n=Number(require("prompt-sync")()("enter number: "))
let arr=new Array()

let a=0;
let b=1;
for(let i=0;i<n;i++){
  arr[i]=a;
  let c=a+b;
  a=b;
  b=c;
}
console.log(arr)