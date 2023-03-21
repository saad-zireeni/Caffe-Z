let order = [];
let user = prompt("Please enter your name:");
order.push(user);
let gender = prompt("what is your gender?");


getGender();

function getGender(){
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
}


let drink_temp = prompt("Would you like a HOT or COLD drink ☕?");
order.push(drink_temp);
let drink_name = prompt("What is the name of your drink?");
order.push(drink_name);
alert("Your drink is being prepared...");

for(let i = 0; i < order.length; i++){
    console.log(order[i]);
}



let order_container = document.getElementById("order-container");
let name_holder = document.createElement("p");
let user_name = document.createTextNode("Name : "+ user);
name_holder.appendChild(user_name);
order_container.appendChild(name_holder);

let myList = document.createElement("ul");
order_container.appendChild(myList);

let li1 = document.createElement("li");
myList.appendChild(li1);
let gender1 = document.createTextNode("Gender : " + gender);
li1.appendChild(gender1);



let li2 = document.createElement("li");
myList.appendChild(li2);
let drinkTemp = document.createTextNode("Drink Temp : " + drink_temp);
li2.appendChild(drinkTemp);


let li3 = document.createElement("li");
myList.appendChild(li3);
let drinkName = document.createTextNode("Drink : " + drink_name);
li3.appendChild(drinkName);