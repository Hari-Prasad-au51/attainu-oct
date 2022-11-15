let n=Number(require("prompt-sync")()("enter array length :"))
let a=[]
for(let i=0;i<n;i++){
a[i]=Number(require("prompt-sync")()("enter array elements :"))
}
let max=a[0];let oi=0

for(let j=0;j<n;j++){
  if(a[j]>=max){
    max=a[j]
     oi=j
  }
 
}
console.log("original index ",oi)
let af=(a,b)=>{return a-b}
res=a.sort(af)
console.log("sort array ",res)
console.log("new index after sort",a.length-1)
