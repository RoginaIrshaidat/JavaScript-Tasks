let x=0;
let y=-1;
let z=4;

if(x>y && x>z){
    if(y>z){
        alert(x +" , "+ y +" , "+ z );
    }
    else{
        document.writeln(x +" , "+ z +" , "+ y);
    }
}
else if (y>x && y>z){
    if(x>z){
        document.writeln(y +" , "+ x +" , "+ z );
    }
    else{
        document.writeln(y +" , "+ z +" , "+ x );
    }
}
else if (z>x && z>y){
    if(x>y){
        document.writeln(z +" , "+ x +" , "+ y );
    }
    else{
        document.writeln(z +" , "+ y +" , "+ x );
    }
}