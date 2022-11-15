let a=[1,2,3,4,5,7,9]
let sum=0;
for(let i=0;i<a.length;i++){
  if(a[i]%2!=0){
      sum=sum+a[i]
  }
}
console.log(sum)