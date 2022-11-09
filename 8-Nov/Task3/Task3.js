function fontFamily() {
    var font=document.getElementById("font").value;

    switch (font) {
        case "arial":
            document.getElementById('dogPara').style.fontFamily="Arial, Helvetica, sans-serif";
            break;
        case "gillSans":
            document.getElementById('dogPara').style.fontFamily="Gill Sans";
            break;
        case "impact":  
            document.getElementById('dogPara').style.fontFamily="Impact";  
            break;
    }    
}
  function FontSize() {
    var si = document.getElementById("size").value;
    switch (si)
    {
        case "small":
        document.getElementById("dogPara").style.fontSize="12px"
        break;
        case "medium":
        document.getElementById("dogPara").style.fontSize="18px"
        break;
        case "large":
            document.getElementById("dogPara").style.fontSize="24px"
            break;
       
    }
  }

  function italicStyle() {
        var ita=document.getElementById("italiccheck").checked;
        if (ita) {
            document.getElementById("dogPara").style.fontStyle="italic";        
        }
        
  }
  function boldStyle() {
    var ita=document.getElementById("boldcheck").checked;
    if (ita) {
        document.getElementById("dogPara").style.fontWeight="bold";        
    }
    
}
    function underLineStyle() {
        var ita=document.getElementById("underlinecheck").checked;
        if (ita) {
            document.getElementById("dogPara").style.textDecoration="underline";        
        }
        
    }



   