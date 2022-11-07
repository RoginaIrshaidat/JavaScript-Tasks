var num1=window.prompt("Enter your first integer num",0);
var num2=window.prompt("Enter your second integer num",0);

if(parseInt(num1,10) > parseInt(num2,10)){
    document.writeln("The number largest of  "+num1 + "  and " +num2 + " is" + num1);
}
else if(parseInt(num2,10) > parseInt(num1,10)){
    document.writeln("The number largest of  "+num1 + "  and " +num2 + " is" + num2);
}
else{
    document.writeln("The number largest of  "+num1 + "  and " +num2 + " are equal" );

}