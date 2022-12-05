let input=`2
1 2 3
1 3 2`
input=input.trim().split("\n")
let line=0
let n=input[line++]
for(let i=0;i<n;i++){
  let arr=input[line++].trim().split(" ").map(Number)
  let [x,y,z]=[...arr]
 if(Math.abs(z-x)<Math.abs(z-y)){
   console.log("cat a")
 }
  else if(Math.abs(z-x)>Math.abs(z-y)){
    console.log("cat b")
  }
  else{
    console.log("mouse c")
  }
}
// console.log(input)