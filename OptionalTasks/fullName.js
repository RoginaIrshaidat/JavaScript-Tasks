let firstName=prompt("Enter your first name :","ahmad");
let lastName=prompt("Enter your last name :","mohammed");

function fullName(fName,lName) {
    return fName.concat(" ",lName)
}

document.write("The Full Name is : "+fullName(firstName,lastName));