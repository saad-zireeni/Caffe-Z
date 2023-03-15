let user = prompt("Please enter your name:");
let gender = prompt("what is your gender?");
let lowerGender = gender.toLocaleLowerCase();

if(lowerGender === "male"){
    alert("Welcome Mr."+user);
}
else if( lowerGender === "female"){
    alert("Welcome Ms."+user);
}
else{
    alert("Welcome "+user);
}
let drink_temp = prompt("Would you like a HOT or COLD drink ?");
let drink_name = prompt("What is the name of your drink?");
alert("Your drink is being prepared...");

console.log(user + " ordered a " + drink_name);