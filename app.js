let order = [];
let user = prompt("Please enter your name:");
order.push(user);
let gender = prompt("what is your gender?");


while(gender !== "male" && gender !== "female"){
    gender = prompt("what is your gender?");
}
order.push(gender);

if(gender == "male"){
    alert("Welcome Mr."+user);
}
else if( gender == "female"){
    alert("Welcome Ms."+user);
}

let drink_temp = prompt("Would you like a HOT or COLD drink ☕?");
order.push(drink_temp);
let drink_name = prompt("What is the name of your drink?");
order.push(drink_name);
alert("Your drink is being prepared...");

for(let i = 0; i < order.length; i++){
    console.log(order[i]);
}