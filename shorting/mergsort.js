let arr=[1,2,5,4,6,7,9,3,8]

margesort(arr,0,arr.length)
console.log(arr)
function margesort(arr,start,end){
  if(end-start==1){
    return 
  }
  else{
    let mid=parseInt((start+end)/2)
    
    margesort(arr,start,mid)
    margesort(arr,mid,end)
     merge(arr,start,mid,end)
  }
}
function merge(arr,start,mid,end){
  let i=start
  let j=mid
  let k=0;
  let c=new Array(end-start)
   while((i<mid)&&(j<end)){
    if(arr[i]<arr[j]){
      c[k]=arr[i]
      i++
    }
    else{
      c[k]=arr[j]
      j++
    }
    k++
  }
  while(i<mid){
    c[k]=arr[i]
    i++
    k++
  }
   while(j<end){
    c[k]=arr[j]
    j++
    k++
   }
 for(let l=0;l<c.length;l++){
   arr[start+l]=c[l]
 }
}