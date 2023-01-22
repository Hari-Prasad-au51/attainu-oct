let arr=[[1,2,3,11],
         [4,5,6,12],
         [7,8,9,13]]
spirall(arr)
function spirall(arr){
  let minr=0;
  let minc=0;
  let maxr=arr.length-1;
  let maxc=arr[0].length-1
  let ct=0;
  let tot=arr.length*arr[0].length
  let c=[]
  while(ct<tot){
  for(let i=minr,j=minc;j<=maxc&&ct<tot;j++){
    c.push(arr[i][j])
    ct++
  }
    minr++
    for(let i=minr,j=maxc;i<=maxr&&ct<tot;i++){
    c.push(arr[i][j])
    ct++
  }
    maxc--
    for(let i=maxr,j=maxc;j>=minc&&ct<tot;j--){
    c.push(arr[i][j])
    ct++
  }
    maxr--
    for(let i=maxr,j=minc;i>=minr&&ct<tot;i--){
    c.push(arr[i][j])
    ct++
  }
    minc++
}
  console.log(c)
}