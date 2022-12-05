let n=6
 var hs=1
var sp=n-hs

for(let j=0;j<n;j++){
  let s="";let h="";let line=""
    for(let i=0;i<sp;i++){
        s=s+" "
    }
  
  for(let k=0;k<hs;k++){
    h=h+"#"
  }
  line=line+s+h
  
  console.log(line)
  hs++
  sp--

}
 
