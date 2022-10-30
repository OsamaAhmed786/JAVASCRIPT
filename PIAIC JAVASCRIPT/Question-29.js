/* 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits =["mango","grapes", "apple"];


//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favorite_fruits.includes("mango")) {
    console.log("i really like mango");
}

if (favorite_fruits.includes("grapes")) {
    console.log("i really like grapes");
}

if (favorite_fruits.includes("apple")) {
    console.log("i really like apple");
}

if (favorite_fruits.includes("banana")) {
    console.log("i really like banana");
}

if (favorite_fruits.includes("cheery")) {
    console.log("i really like cheery ");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// My favorite Method 2

let random_fruite = ["mango", "grapes", "apple", "banana", "cheery"];

favorite_fruits.forEach((item) => {
    random_fruite.includes(item) && console.log('i really like ${item}');

});


