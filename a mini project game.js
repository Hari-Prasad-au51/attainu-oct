
let my_number=parseInt((Math.random()*100))
let u_number=0;
do{
   u_number=Number(require("prompt-sync")()("enter user two digit number: "))
  if(u_number==my_number){
    console.log("congurats you enterd correct number")
    break;
  }
  else if(u_number>my_number){
    console.log("your numer is too large")
  }
  else {
    console.log("your number is too small")
  }

}while(u_number>=0);
  console.log(my_number);
