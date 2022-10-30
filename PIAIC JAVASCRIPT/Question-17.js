/* 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */



// .start  your program from exersice 16. add a new line that print a message saying that you can invite only two people for dinner.

let guests =["Osama", "Ahmed", "Ladla"];

//.Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list , print a message to that person letting them know you are sorry you cant in vite them for dinner.

let guest1 = guests.pop();
console.log('${guest1}, I am sorry that i cannot invite you to dinner');


//.Print a message to each of the two people still on your list , letting them know they are still invited.

let invitations = guests.map((item) => {
    return '${item} you are invited to the dinner Tonight';
});
console.log(invitations.join("\n"));


//.Remove the last two names from your list, so you have an empty list. print your list to make sure you actually have an empty list at the end of your program.

guests.pop();
guests.pop();

//There is not guest list in array now

console.log(guests);
