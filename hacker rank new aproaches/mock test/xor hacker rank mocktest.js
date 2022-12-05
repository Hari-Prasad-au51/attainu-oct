let input=`10 10
1 2 1 1 1 1 1 1 1 1
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10`
input=input.split("\n")
fl=input[0].trim().split(" ").map(Number)
let [n,q]=[fl[0],fl[1]]
let arr=input[1].trim().split(" ").map(Number)
 let line=2;


  for(let i=0;i<q;i++){
    p=input[line++].split(" ")
   let l=p[0]
   let r=p[1]
   
   let x=0
        for(let j=l-1;j<r;j++){
             x=x^arr[j]
         }
        console.log(x)
   }

