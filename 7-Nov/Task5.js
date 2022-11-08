let num1= prompt ("Enter your  integer number",0);

 let num=Number(num1);
 document.write("<hr>");
  oddNum(num);
function oddNum(param) {
    if (param %2 == 0) {
        document.write("False");
    }
    else {
        document.write("True");
    }
} 