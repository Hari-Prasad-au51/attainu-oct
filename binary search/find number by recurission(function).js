let arr=[1,2,3,4,5,6,7]
let target=7
let low=0;
let high=arr.length-1;
let id=0;
function func(arr,low,high){
  let mid=Math.floor(low+(high/2-low/2))
  if(target==arr[mid]){
    id=mid
   console.log(id)
   }
 else if(target<arr[mid]){
    func(arr,low,mid-1)
  }
  else{
    func(arr,mid+1,high)
  }
}
func(arr,low,high)
