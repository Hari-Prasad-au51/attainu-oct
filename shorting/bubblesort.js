let arr=[1,2,3,4,5,-23]
var flag
bubblesort(arr)
console.log(arr,flag)
 
function bubblesort(arr){
   flag=0
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length-i;j++){
      if(arr[j]<arr[j-1]){
        [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
        flag=1
      }
    }
    if(flag==0){
      break
    }
  }
 
    
  }
