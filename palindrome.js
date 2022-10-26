let n=require("prompt-sync")()("enter a number: ");
let dig=0;
let rev=0;
for(let i=n;i!=0;i=parseInt(i/10)){
  dig=i%10;
  rev=rev*10+dig;
}
if(rev==n){
  console.log("palindrome");
}
else{
  console.log("not a pallindrome");
}