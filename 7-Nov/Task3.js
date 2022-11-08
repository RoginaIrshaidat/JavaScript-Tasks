var string =  ["mercer","madrasa","alex","rashed2","emad","hala"];

document.write("<hr>"+"shorter element in array is :  "+shortInArray(string));

function shortInArray(str) {
    
    let short=100;
    let shortName="";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length < short) {
            short=str[i].length;
            shortName=str[i];                        
        }
        
    }
    return shortName;
}