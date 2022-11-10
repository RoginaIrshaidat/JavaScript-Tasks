
function showCard() {
    document.getElementById('cardInfo').style.display="block";
    document.getElementById('cardInfo').style.border="2px solid gray";
    document.getElementById('cardInfo').style.background="plum";


    let Subj=document.getElementById("subj").value;
    sessionStorage.setItem("Subject",Subj);
    sessionStorage.getItem("Subject");
    document.getElementById("sub").innerHTML+=Subj;


    let Desc=document.getElementById("desc").value;
    sessionStorage.setItem("Description",Desc);
    sessionStorage.getItem('Description');
    document.getElementById("des").innerHTML+=Desc;


     let userType=""
     if (document.getElementById("client").checked) {
        userType+=document.getElementById("client").value;
     }
     if(document.getElementById("admain").checked){
        userType+=document.getElementById("admain").value;
     }
     if(document.getElementById("visitor").checked){
        userType+=document.getElementById("visitor").value;
     }
     
    sessionStorage.setItem("UserTypes",userType);

    sessionStorage.getItem('UserTypes');
    document.getElementById("uType").innerHTML+=userType;

     
    let techo=""
    if (document.getElementById("html").checked) {
        techo+=document.getElementById("html").value;
    }
    if(document.getElementById("css").checked){
        techo+=document.getElementById("css").value;
    }
    if(document.getElementById("js").checked){
        techo+=document.getElementById("js").value;
    }
    if(document.getElementById("asp.net").checked){
        techo+=document.getElementById("asp.net").value;
    }
   sessionStorage.setItem("TechnologyUsed",techo);

   sessionStorage.getItem('TechnologyUsed');
   document.getElementById("techno").innerHTML+=techo;





    
}