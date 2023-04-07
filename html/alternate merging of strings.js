
function func(h,g){
a=h.split("");
b=g.split("")
let c=""
for(let i=0;i<a.length||i<b.length;i++){
if(i<a.length)
  c=c+a[i]
  if(i<b.length)
    c=c+b[i] 
}
console.log(c)
}
func("123456","-1-2")