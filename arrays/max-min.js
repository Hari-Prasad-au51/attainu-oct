 let n=Number(require("prompt-sync")()("enter array length :"))
let a=[]
for(let i=0;i<n;i++){
 a[i]=Number(require("prompt-sync")()("enter array elements :"))
}
let af=(x,y)=>{return x-y}
res=a.sort(af)
console.log(a[a.length-1]-a[0])
