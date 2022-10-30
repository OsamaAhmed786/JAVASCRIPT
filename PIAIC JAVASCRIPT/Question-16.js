/* 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */


let guests = ["Osama", "Ahmed", "Ladla"];
let invitations1 = guests.map((item) => {
    return '${item} you are invited to the dinner tonight';
});

console.log('${guests[1]} is not avaiable for the dinner');
guests[1] = "noor";


// .start  your program from exersice 15. add aprint statement to the end of your program informing people that you found a bigger dinner table.

console.log("we have more space available for more guests on our dinner table");

//.Add one new guest to the begininng of your array

guests.unshift("sammi");

//.add oe new guest to the middle of your array. .use Uppend() to add one new guest to the end of your list. print a new set of invitation messages, one for each person in your list.

guests.splice(2,0, "aleena");
let invitations = guests.map((item) => {
    return '${item} you are invited to the dinner tonight';
});

console.log(invitations.join("\n"));