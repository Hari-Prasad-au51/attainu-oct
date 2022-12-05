
 
let n=3
  let ct=0
while(n!=1){
  if(n%2==0){
    n=parseInt(n/2)
   ct++
  }
  else{
    n=3*n+1,
      ct++;
  }
}
console.log(ct)
