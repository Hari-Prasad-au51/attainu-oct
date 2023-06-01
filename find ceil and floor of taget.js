
let arr=[1,3,5,7,9,10]
let target=5;
let low=0; 
let high=arr.length-1;
console.log(targ(arr,low,high,target))
function targ(arr,low,high,target){
 
while(low<=high){
  let mid=Math.floor(low+(high-low)/2);
  if(target==arr[mid]){
    return `found target ${mid}`
  }
  else if(target<arr[mid]){
    high=mid-1
  }
  else low=mid+1
  
}
  return `ceil is ${arr[low]},floor${arr[high]}`
}