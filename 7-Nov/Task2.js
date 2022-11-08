let num1= window.prompt ("Enter your first integer number",0);
let num2=window.prompt("Enter your second integer number",0);

let num=Number(num1);
let num3=Number(num2);

document.write("<hr>")

document.write("The two number are : "+ num1 +" and " + num2 + "<br>");

largestNumber(num,num2);
function largestNumber(x,y) {
    if(x>y){
        document.write("The largest number is : "+  x);
    }
    else{
        document.write("The largest number is : "+  y);
    }
}