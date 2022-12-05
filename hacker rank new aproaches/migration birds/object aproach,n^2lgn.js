
let arr=[1,2,3,4,5,4,3,2,1,3,4]
function func(a,b){
  return a-b;
  
}
let sarr=arr.sort(func)
let obj={}
   for(let ele of sarr){
     if( obj[ele]==undefined){
       obj[ele]=1
      } else{
         obj[ele]+=1  
       }
   }
let total=0;
  let id=0;
for(let keys in obj){
  if(obj[keys]>total){
    total=obj[keys]
    id=keys
  }
}
console.log( id)
