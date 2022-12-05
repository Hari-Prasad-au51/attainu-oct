let input=`6 3
1 3 2 6 1 2`
input=input.trim().split("\n")
let  [n,k,arr]=[+input[0][0],+input[0][2],input[1].trim().split(" ").map(Number)]
let ct=0;
for(let i=0;i<n;i++){
  for(let j=i+1;j<n;j++){
    if((arr[i]+arr[j])%k==0){
      ct++
    }
}
}
console.log(ct)