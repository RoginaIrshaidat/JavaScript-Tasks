
function minPass() {

    let passwo= document.getElementById("pass").value;
    if(passwo.length<6)
    
        document.getElementById("shortPass").innerHTML="Too short";
}

function confirmPass() {
    let passwo= document.getElementById("pass").value;
    let confirm= document.getElementById("confPass").value;
    if(passwo != confirm)
    {
        document.getElementById("notMatchPass").innerHTML="The two passwords don't match";
    }
    else{
        document.getElementById("btn").style.display="inline";
    }
        
}
