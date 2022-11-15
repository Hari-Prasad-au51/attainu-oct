let n=6;
let a=[-4,3,-9,-5,4,1,0,0]
let pct=0;
let nct=0;
let zct=0;
for(let i=0;i<a.length;i++){
  if(a[i]>0){
    pct++;
    }
  else if(a[i]<0){
    nct++;
  }
  else{
    zct++
  }
}
console.log(pct/n);
console.log(nct/n);
console.log(zct/n);