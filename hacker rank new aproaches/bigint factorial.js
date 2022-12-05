
let n=25
  let p=1;
    for(let i=1;i<=n;i++){
    p=BigInt(p)*BigInt(i)
    }
    let st=p.toString()
    console.log(st)