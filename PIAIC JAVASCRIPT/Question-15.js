/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
 */

let guests = ["Osama", "Ahmed", "Ladla"];
let invitations = guests.map((item) => {
    return '${item} you are invited to the dinner tonight';
});

console.log(invitations.join("\n"));

//.Start with your program rom exersise 14. add aprint statement at the end o your program stating the name of guest.

console.log('${guests[1]} is not avaiable for the dinner');

//.modify your list, replacing name

guests[1] = "noor";

//.Print a cecond set of invitation mesages, one for each person who is stillin your list.

let newInvitations = guests.map((item) => {
    return '${item} you are invited to the diner tonight' ;

});

console.log(newInvitations.join("\n"));

