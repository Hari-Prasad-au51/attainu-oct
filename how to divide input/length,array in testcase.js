
let input=`2
5
1 2 3 4 5
4
1 2 3 4`
input=input.split("\n")
let line=0
 let tc=+input[line++]
for(let i=0;i<tc;i++){
  let n=+input[line++]
  let arr=input[line++].split(" ").map(Number)
  func(n,arr)
}
function func(n,arr){
  let st="";
  for(let i=0;i<n;i++){
    st=st+(arr[i]+1)+" "
  }
  console.log(st)
}