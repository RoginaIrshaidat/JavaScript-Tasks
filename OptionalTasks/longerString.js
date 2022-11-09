let string=prompt("Enter your first string :","name");
let string1=prompt("Enter your second string :","string");
let string2=prompt("Enter your third string :","name");
let string3=prompt("Enter your forth string :","string");

function longerString(str,str1,str2,str3) {
    let long=1;
    let longName="";
    if(str.length >long){
        long=str.length;
        longName=str;
    }
    else if(str1.length>long){
        long=str1.length;
        longName=str1;
    }
    else if(str2.length>long){
        long=str2.length;
        longName=str21;
    }
    else {
        long=str3.length;
        longName=str3;
    }
    return longName;
}

document.write("<hr>"+"shorter element in array is :  "+ longerString(str,str1,str2,str3));