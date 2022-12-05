let input=`4 1
3 10 2 9
7`
input=input.trim().split("\n")
let [n,id,arr,b]=[+input[0][0],+input[0][2],input[1].trim().split(" ").map(Number),+input[2]]
let sum=0;let stsum=0
arr.splice(id,1)

for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
 
}
let wsh=sum/2
//console.log(wsh)

if(wsh==b){
  console.log("bon applet")
}
else{
  console.log(b-wsh)
}
