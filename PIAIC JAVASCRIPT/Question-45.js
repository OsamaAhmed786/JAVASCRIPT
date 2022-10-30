/*45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/


function carInfo(manufacturer , model, ...optional) {
    let makeCar = {
        manufacturer,
        model,
        ...optional,
    };
    return makeCar;
}

let hondaAccord = carInfo("honda", "accord", (color = "white"), (year = 2022));
let toyotaAltis = carInfo("toyota", "Altis", (year = 2022), (color = "black"));
let suzukiMehran = carInfo("suzuki", "mehran", (year = 2018));
console.log(hondaAccord);
console.log(toyotaAltis);
console.log(suzukiMehran);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////Method////////////////////////////////////////////////////////////

function carInfo1(manufacturer, model,...optional) {
    let makecar = {
        manufacturer,
        model,
        color: optional[0],
        year : optional[1],
    };
    return makecar;
}

let hondaAccord1 = carInfo1(
    "honda",
    "accord",
    (color ="white"),
    (year = 2022)
);

let toyotaAltis1 = carInfo1(
    "Toyota",
    "Altis",
    (color = "black"),
    (year = 2022)
);

let suzukiMehran1 = carInfo1("suzuki", "mehran", (color = null) , (year = 2018));

console.log(hondaAccord1);
console.log(toyotaAltis1);
console.log(suzukiMehran1);

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// Method 3
function carInfo3(manufacturer, model, ...optional) {
    let makeCar = {
        manufacturer,
        model,
    };
    optional.forEach((list)  => {
        makeCar = { ...makeCar, ...list }; 
    });

    // you can use for loop also as this way
    // for (let i 0; i < optionl.length; i++) {
    // makeCar = {...makeCar, ...optional[i]};    
    //}
    return makeCar
}

let hondaAccord3 = carInfo3(
    "honda",
    "accord",
     {color: "white"},
     { year :2022 }
);

let toyotaAltis3 = carInfo3(
    "Toyota",
    "Altis",
    {  color: "black" },
    {  year : 2022 }

);

let suzukiMehran3 = carInfo3("Suzuki", "Mehran", { year : 2018});
console.log(hondaAccord3);
console.log(toyotaAltis3);
console.log(suzukiMehran3);











