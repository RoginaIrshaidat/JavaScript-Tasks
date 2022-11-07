
document.write("<hr>"+ "All number from 1 to 1000 the devided on 13 is 0 :"+"<br>");
for (let i = 1; i < 1000 ; i++){
    if(i % 13 == 0)   {
        document.write(i + "  ");
    }
}