      
      function flagOfCountry(){            
            var x= document.getElementById('country').value;
            switch (x) {
                case "norway":
                    document.getElementById('flagImg').src="../Task2/Pictures/Flag_of_Norway.svg.png";
                    break;
                case "jordan":
                    document.getElementById('flagImg').src="../Task2/Pictures/Flag_of_jordan.png";
                    break;    
                case "germany":
                    document.getElementById('flagImg').src="../Task2/Pictures/flag-of-germany.jpg";
                    break;  
                case "u.s.a":   
                    document.getElementById('flagImg').src="../Task2/Pictures/united-states-flag.jpg";
                    break;  
                default:
                    document.getElementById('flagImg').src="../Task2/Pictures/flag-of-qatar.jpg";
            }
            
            }
           
        
        
    
 

     