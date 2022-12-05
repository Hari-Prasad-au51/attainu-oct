let a=[1,3,5,6,7,8,9]
let target=10;
 let id=0;
// for(let i=0;i<a.length;i++){
//   if(a[i]==target){
//     id++
//   }
// }
//   if(id==0){
//     console.log("target is not found")
//   }
//   else{
//     console.log("target is  found")
//   }
  
let l=0;
let h=a.length-1;
while(l<=h){
  
  let mid=Math.floor((l+h)/2)
  if(a[mid]>target){
    h=mid-1
  }
  else if(a[mid]<target){
    l=mid+1
  }
  else{
    console.log("target is found");
    id=1
    break
  }
}
if(id==0){
  console.log("not found")
}
