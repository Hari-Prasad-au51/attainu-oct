let arr=[1,2,2,2,2,2,2,2,3,4,5,6,7]
let target=2
let low=0;
let high=arr.length-1;
let id=0;
function ub(arr,low,high){
  while(low<=high){
  let mid=Math.floor((low+high)/2)
    if(target==arr[mid]){
      id=mid;
      low=mid+1;
    }
    else if(target<arr[mid]){
      high=mid-1
    }
    else{
      low=low+1
    }
    
  }
   console.log(id)
}
function lb(arr,low,high){
  while(low<=high){
  let mid=Math.floor((low+high)/2)
    if(target==arr[mid]){
      id=mid;
      high=mid-1;
    }
    else if(target<arr[mid]){
      high=mid-1
    }
    else{
      low=low+1
    }
    
  }
   console.log(id)
}
lb(arr,low,high)
