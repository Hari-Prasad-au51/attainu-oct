let a=[1,2,3,4,5]
let evensum=0
let oddsum=0
for(ele of a){
  if(ele%2==0){
   evensum=evensum+ele
  }
  else{
    oddsum=oddsum+ele
  }
}
console.log(evensum,oddsum)