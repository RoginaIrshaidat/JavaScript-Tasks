let age=Number(prompt("Enter your age :",15));

function canIGetADrivingLicense(agee) {
    if (agee >=20) {
        document.write("Yes you can");
        
    }
    else{
        let year = 20 - agee;
        document.write("Please come back after "+ year +" years to get one");
    }
    
}

canIGetADrivingLicense(age);