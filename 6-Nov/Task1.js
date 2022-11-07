let month = window.prompt("Enter month of your birthday ",1);


switch(month){
    case "1" :        
        document.write("The input: "+ month+"<br>"  +" The output: January ")
        break;

    case "2" :
        document.write("The input:  "+month+"<br>"  +"The output : February")
        break;

     case "3" :
        document.write("The input:  "+month+"<br>" +"The output : March")
        break;

    case "4" :
        document.write("The input: "+month+"<br>" +"The output : April")
        break;

    case "5" :
        document.write("The input: "+month +"<br>"+"The output : May")
        break;

    case "6" :
        document.write("The input: "+ month+"<br>"  +"The output : June");
        break;

    case "7" :
        document.write("The input: "+  month+"<br>" +"The output : July");
        break;    

    case "8" :
        document.write("The input: "+  month+"<br>" +"The output :  August")
        break;
    
    case "9" :
        document.write("The input: "+ month+"<br>"+"The output : Septmber");
        break;

    case "10" :
        document.write("The input: "+month+"<br>"+"The output : October");
        break;

    case "11" :
            document.write("The input: "+ month+"<br>"+"The output : Novmber");
            break;

    case "12" :
        document.write("The input: "+  month+"<br>"+"The output : Decmber");
        break;

    default:
        document.write("Invalid Month"+"<br>")    ;
}

