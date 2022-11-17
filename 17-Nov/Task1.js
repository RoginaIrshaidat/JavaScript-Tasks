 async function InfoOfUsers(){

   const respon=await fetch("https://hp-api.herokuapp.com/api/characters");
   console.log(respon);
        
   const data=await respon.json();
   console.log(data);

   for (let i = 0; i < data.length; i++) {
        
      var option= new Option (data[i].name,data[i].image);     
      const select = document.getElementById('User');     
      select.add(option); 
            
    }

   
     }
     InfoOfUsers();


     function imageChange() {
      let select = document.getElementById('User').value;
      document.getElementById('image').src=select;    
     }
     
   

 