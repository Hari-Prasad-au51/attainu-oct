
let a=[1,2,4,5,6]
function func(tot,x){
  return tot+x   
}
  res=a.reduce(func)
n=a.length
res2=((n+1)*(n+2))/2
console.log(res2-res)

