let x=-5;
let y=-2;
let z=-6;
let v=0;
let w=-1;

 
if(x>y && x>z && x>v && x>w){
   alert( "The largest number is : " + x);
}
else if(y>x && y>z && y>v && y>w){
    alert("The largest number is : " + y);
}
else if(z>x && z>y && z>v && z>w){
    alert("The largest number is : "+ z);
}
else if(v>x && v>y && v>z && v>w){
    alert("The largest number is : "+ v);
}
else {
    alert("The largest number is : "+ w);
}