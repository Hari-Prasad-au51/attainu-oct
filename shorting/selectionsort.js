let arr=[5,4,3,2,1,-5]
selectionsort(arr)
console.log(arr)
function selectionsort(arr){
  for(let i=0;i<arr.length;i++){
    let lastindex=arr.length-1-i
    let maxindex=max(arr,0,lastindex)
    swap(arr,maxindex,lastindex)
  }
}
function max(arr,start,end){
  let maxi=start
  for(let i=start;i<=end;i++){
    if(arr[maxi]<arr[i]){
      maxi=i
    }
  }
  return maxi
}
function swap(arr,maxind,lastind){
   [arr[maxind],arr[lastind]]=[arr[lastind],arr[maxind]]
  // let temp=arr[maxind]
  // arr[maxind]=arr[lastind]
  // arr[lastind]=temp
}