/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */

let names = ["Osama", "Ahmed", "Anus", "Hamza"];

console.log(names[0] + '\t' + "is my best friend");
console.log(names[1] + '\t' + "is my best friend");
console.log(names[2] + '\t' + "is my best friend");
console.log(names[3] + '\t' + "is my best friend");


// Method2 (Advanced)
let newArray = names.map((friend) => '${friend} is my best friend');
let newStrings = newArray.join(",\n");
console.log(newStrings);