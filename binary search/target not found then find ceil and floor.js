
 let a=[1,2,5,7,8,9]
let target =5
let low=0;let high=a.length-1;
let id=0;
let flag=0;
while(low<=high){
  let mid=Math.floor((low+high)/2)
  if(a[mid]>target){
    high=mid-1
  }
  else if(a[mid]<target){
    low=mid+1
  }
  else{
    id=mid
    flag=1
    
   console.log("target found at",id)
    break
    }
}
if(flag==0){
console.log("ceil is",a[low])
console.log("floor is",a[high])
}