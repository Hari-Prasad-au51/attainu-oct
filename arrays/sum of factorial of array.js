// sum of fctorial of given array
let a=[1,2,3,4,5]
function func(a){
let sum=0;
for(let j=0;j<a.length;j++){
  let p=1
for (let i=1;i<=a[j];i++){
  p=p*i;
  
}
   sum=sum+p
}
  return sum
}
res=func(a)
console.log(res)