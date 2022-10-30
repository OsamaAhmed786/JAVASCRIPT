/* 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 */

let myName = "osama";
let age = 20;
let height = 5.8;
let nationality = "pakistani";
let city = "karachi";
let hobby = "traveling";
let favFood = "biryani";
let favGame = "videogame";
let favColor = "black";
let favcar = "GMC";


//.Tests for equality and inequality with strings

let NameTest = myName == "osama"  ? true : false;


//.Tests using lower case function

let nationalityTest = nationality == "pakistani"  ? true : false;

//.Numerical tests involving eqality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let ageTest = age === 25  ? true : false;

let ageTest1 = age === 20  ? true : false;

let ageTest2 = age > 23 ? true : false;

let ageTest3 = age < 26 ? true : false;

let ageTest4 = age >= 21  ? true : false;

let ageTest5 = age <= 22  ? true : false;



//.Test using "and" and "or" operators

let heightTest = height === 5.8 || 5.8 ? true : false;
let heightTest1 = height === 5.7 && age ===26  ? true : false;


//.Test whether an item is in a array

let cityTest = city.includes("karachi")  ? true : false;


//.Test whether an item is not in a array

let cityTest1 = !city.includes("karachi")  ? true : false;


console.log(NameTest);
console.log(ageTest);
console.log(ageTest1);
console.log(ageTest2);
console.log(ageTest3);
console.log(ageTest4);
console.log(heightTest);
console.log(heightTest1);
console.log(ageTest3);
console.log(ageTest4);
console.log(nationalityTest);
console.log(cityTest);
console.log(cityTest1);
