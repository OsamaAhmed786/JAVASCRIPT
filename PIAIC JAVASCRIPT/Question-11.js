/* 11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. */

let names = ["Osama", "Ahmed", "Anus", "Hamza"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//method 2 (Advanced)
names.forEach((item) => {
    console.log(item);
});
