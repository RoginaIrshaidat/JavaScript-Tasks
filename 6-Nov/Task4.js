
document.write("<hr>"+ "The  summation of number 0 - 100  "+"<br>");
let sum =0;
for (let i = 0; i <=100; i++) {

    sum+=i;
    document.write(sum + "   ");

    if(sum >100){   
        break;    
    }     
    
}
