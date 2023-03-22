const form = document.getElementById("form");
const order = document.getElementById("order");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let userName = e.target.name.value;
    let age = e.target.age.value;
    let tempHot = e.target.tempHot.checked ? e.target.tempHot.value : "" ;
    let tempCold = e.target.tempCold.checked ? e.target.tempCold.value : "" ;
    let drink = e.target.drink.value;

    console.log(userName, age, tempHot, tempCold, drink);
    render(userName, age, drink, tempHot, tempCold);
});

function render(userName, age, drink, tempHot, tempCold) {

    let pName = document.createElement("p");
    let pAge = document.createElement("p");
    let pTempHot = document.createElement("p");
    let pTempCold = document.createElement("p");
    let pDrink = document.createElement("p");


    pName.textContent = userName;
    pAge.textContent = age;
    pTempHot.textContent = tempHot;
    pTempCold.textContent = tempCold;
    pDrink.textContent = drink;

    order.appendChild(pName);
    order.appendChild(pAge);
    order.appendChild(pTempHot);
    order.appendChild(pTempCold);
    order.appendChild(pDrink);

}
