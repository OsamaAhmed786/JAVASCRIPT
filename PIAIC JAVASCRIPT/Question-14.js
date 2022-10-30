//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests = ["Osama ahmed", "Anus hussain", "Ebad kamal"];

console.log(guests[0] + "\t" +"you are invited to the dinner tonight")
console.log(guests[1] + "\t" +"you are invited to the dinner tonight")
console.log(guests[2] + "\t" +"you are invited to the dinner tonight")



let invitations = guests.map((item) => {
    return  ' ${friend} you are invited to the dinner tonight';
});

console.log(invitations.join("\n"));
