class prg{
  constructor(a){
    this.ele=a
    
    
  }
  even_odd(x){
    if(x%2==0)console.log("even")
    else console.log("odd")
  }
  prime(y){
    let ct=0;
    for(let i=1;i<=y;i++){
      if(y%i==0){
        ct++
      }
        }
    if(ct==2) console.log("prime")
    else console.log("composite")
  }
  check(z){
    let sum=0;
   let res= z.toString()
     let leng=res.length
    //console.log(leng)
    for(let i=z;i!=0;i=parseInt(i/10)){
      let dig=i%10;
      sum=sum+dig**leng
    }
    if(z==sum)console.log("armstrong")
    else console.log("not armstrong")
  }
}

hari=new prg(54748);
hari.even_odd(hari.ele)
hari.prime(hari.ele)
hari.check(hari.ele)
console.log(hari.ele)