let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]]

function transp(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr[i].length;j++){
      swap(arr,i,j)
    }
  }
  mf(arr)
}
function mf(arr){
  for(let i=0;i<arr.length;i++){
    let st=""
    for(let j=0;j<arr[i].length;j++){
      st=st+arr[i][j]+" "
    }
    console.log(st)
  }
}
function swap(arr,i,j){
   [[arr[i][j]],[arr[j][i]]]=[[arr[j][i]],[arr[i][j]]]  
}
function snake(arr){
  for(let i=0;i<arr.length;i++){
    let st=""
    if(i%2==0){
      for(let j=0;j<arr[i].length;j++){
        st=st+arr[i][j]+" "
      }  
    }
    else{
          for(let j=arr[i].length-1;j>=0;j--){
               st=st+arr[i][j]+" "
           }
    }
    console.log(st)
  }
}
function digsum(arr){
  let sum1=0;
  let sum2=0;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(i==j){
        sum1+=arr[i][j]
      }
       if(i+j==arr[0].length-1){
        sum2+=arr[i][j]
      }
    }
  }
  console.log(Math.abs(sum1+sum2))
  console.log(sum1,sum2)
}

  
function digdiff(arr){
  let sd1=0;
  let sd2=0
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
      if(i==j){
        sd1+=arr[i][j]
      }
      if(i+j==arr[0].length-1&&i!=j){
        sd2+=arr[i][j]
      }
    }
  }
  console.log(Math.abs(sd1-sd2))
  console.log(sd1,sd2)
}
rm90(arr)
function rm90(arr){
  transp(arr)
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<Math.floor((arr[0].length)/2);j++){
     let temp=arr[i][j]
      arr[i][j]=arr[i][arr[0].length-1-j]
      arr[i][arr[0].length-1-j]=temp
      
    }
  }
  mf(arr)
}
