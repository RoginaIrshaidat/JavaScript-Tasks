let string=prompt("Enter your first string :","name");
let string1=prompt("Enter your second string :","string");
  
  function sameLength(str1,str2) {
    if(str1.length == str2.length){
        document.write("The length of arguments are same : " + "True");
    }
    else{
        document.write("The length of arguments are same : " + "False");
    }
    
  }
  sameLength(string,string1);