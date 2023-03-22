const form = document.getElementById("form");
const order = document.getElementById("order");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let userName = e.target.name.value;
    let age = e.target.age.value;
    let temp = e.target.temp.value;
    let drink = e.target.drink.value;

    // console.log(userName + " " + age + " " + temp + " " +drink);
    render(userName, age, drink, temp);
});

function render(userName, age, drink, temp){

    let pName = document.createElement("p");
    let pAge = document.createElement("p");
    let pTemp = document.createElement("p");
    let pDrink = document.createElement("p");


    pName.textContent = userName;
    pAge.textContent = age;
    pTemp.textContent = temp;
    pDrink.textContent = drink;

    order.appendChild(pName);
    order.appendChild(pAge);
    order.appendChild(pTemp);
    order.appendChild(pDrink);

}
