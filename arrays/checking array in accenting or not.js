let a=[1,4,4,4,4]
let b = [1,2,3,4]
let ct=0
function func(x){
  for(let i=0;i<x.length;i++){
    for(let j=i+1;j<x.length;j++){
     if(x[i]>x[j]){
      ct++;
       }
    }
  }
      if(ct!=0){
        return "no"
      
      }
      else{
        return "yes"
      }
   
  }

res=func(a)
console.log(res)
res=func(b)
console.log(res)
