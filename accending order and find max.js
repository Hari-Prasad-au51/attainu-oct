let a=[556,5656,3224]

let temp=0;
for(let i=0;i<3;i++){
for(let j=i+1;j<3;j++){
  if(a[i]>=a[j]){
    temp=a[j];
    a[j]=a[i];
    a[i]=temp;
  }
}

}
console.log(a);