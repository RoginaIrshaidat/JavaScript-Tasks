let string=prompt("Enter your first string :","name");
let string1=prompt("Enter your second string :","string");
let string2=prompt("Enter your third string :","name");
let string3=prompt("Enter your forth string :","string");

function longerString(str,str1,str2,str3) {
    let long="";
    let array=[str,str1,str2,str3];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= long.length) {
            long = array[i];
            
        }
        
    }
    document.write(`long element in array is :  ${long}`);
}

 longerString(string,string1,string2,string3);