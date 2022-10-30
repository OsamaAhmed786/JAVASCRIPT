/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


var lower="Osama Ahmed"
var p=lower.toLowerCase()
console.log(p)

var upper="Osama Ahmed"
var e=upper.toUpperCase()
console.log(e)

// name in titlecase
var my_name = "Osama";

//dividing name osama into two parts ( o and sama ) by using slice() function
var separating_name = my_name.slice(1);
console.log(separating_name);

//getting first letter of name osama with chartAt() function
var firstletter= my_name.charAt(0);

// capitalizing first letter of osama
var capatilize_First_Letter = firstletter.toUpperCase();
console.log(capatilize_First_Letter);

//concatination 
var final = capatilize_First_Letter + separating_name;
console.log(final);