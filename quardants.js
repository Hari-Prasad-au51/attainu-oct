let x=require("prompt-sync")()("ente x quardant: ");
let y=require("prompt-sync")()("ente x quardant: ");
if(x==0&&y==0){
  console.log("center");
}
else if(x>0&&y>0){
  console.log("q1");
}
else if(x<0&&y>0){
  console.log("q2");
}
else if(x<0&&y<0){
  console.log("q3");
}
else{
  console.log("q4");
}