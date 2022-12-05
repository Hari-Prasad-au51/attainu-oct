let input=`6
3 9 4 6 7 5`
input=input.trim().split("\n")
let [n,arr]=[+input[0],input[1].trim().split(" ").map(Number)]
let ct=0
for (let i=0;i<n;i++){
  for (let j=i+1;j<n;j++){
    if(arr[i]>arr[j]){
      ct++
      break
    }
  }
}
console.log(ct)