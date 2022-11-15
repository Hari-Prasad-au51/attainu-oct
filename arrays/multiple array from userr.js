function func(){
let n=Number(require("prompt-sync")()("enter array length"))
let a=[]

  for(let i=0;i<n;i++){
 a.push(Number(require("prompt-sync")()("enter array numbers")))
    
}
  return a
}
 res=func()
console.log(res)
res2=func()
console.log(res2)


