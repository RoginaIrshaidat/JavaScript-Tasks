
function showCard() {
    document.getElementById('cardInfo').style.display="block";
    document.getElementById('cardInfo').style.border="2px solid gray";
    document.getElementById('cardInfo').style.background="lightblue";


    let Name=document.getElementById("name").value;
    localStorage.setItem("Name",Name);

    localStorage.getItem("Name");
    document.getElementById("fname").innerHTML+=Name;


    let agee=document.getElementById("age").value;
    localStorage.setItem("Age",agee);

    localStorage.getItem('Age');
    document.getElementById("yAge").innerHTML+=agee;


    let briefDesc=document.getElementById("brief").value;
    localStorage.setItem("Berif",briefDesc);

    localStorage.getItem('Berif');
    document.getElementById("dBrief").innerHTML+=briefDesc;


    let majorUnvi=document.getElementById("major").value;
    localStorage.setItem("Major",majorUnvi);

    localStorage.getItem('Major');
    document.getElementById("mUnvier").innerHTML+=majorUnvi;


     let lang=""
     if (document.getElementById("html").checked) {
        lang+=document.getElementById("html").value;
     }
     if(document.getElementById("css").checked){
        lang+=document.getElementById("css").value;
     }
     if(document.getElementById("js").checked){
        lang+=document.getElementById("js").value;
     }
     if(document.getElementById("asp.net").checked){
        lang+=document.getElementById("asp.net").value;
     }
    localStorage.setItem("ProgrammingLanguage",lang);

    localStorage.getItem('ProgrammingLanguage');
    document.getElementById("pLang").innerHTML+=lang;

     let gender=""
     if(document.getElementById("female").checked){
        gender+=document.getElementById("female").value;
     }
     if(document.getElementById("male").checked){
        gender+=document.getElementById("male").value;
     }
     localStorage.setItem("Gender",gender);
     localStorage.getItem('Gender');
    document.getElementById("gen").innerHTML+=gender;

    




    
}