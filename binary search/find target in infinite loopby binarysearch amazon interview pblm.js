let arr=[3,5,7,9,10,100,130,140,150]
let target=10
function range(arr,target){
  let low=0;
  let high=1;
  while(target>arr[high]){
    let newlow=high+1
    high=high+(high-low+1)*2
    low=newlow
  }
  return searchtarget(arr,target,low,high);
}
function searchtarget(arr,target,low,high){
  while(low<=high){
    let mid=Math.floor(low+(high-low)/2)
  if(target<arr[mid]){
    high=mid-1
  }
  else if(target>arr[mid]){
    low=mid+1
  }
  else{
    // console.log(mid)
    // break
    return mid
  }
  }
}
let res=range(arr,target)
console.log(res)
