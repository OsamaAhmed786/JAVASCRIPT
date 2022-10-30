/* 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */


//.store the location in a array. Make sure the array is not in alphabetical order.

const locations = ["Pakistan", "Afganistan", "Indonesia", "Turkey", "saudia arabia"];

//.print your array in its original order.

console.log(locations);

//.Print your array in alphabetical order without modifying the actual list.

let sortedlocations = locations.slice().sort();
console.log(sortedlocations);


//.Show that your array is stil in its original order by printing it again.

console.log(locations);

//.Print your array in reverse alphabetical order without changing the order of the origial list.

let reversedSortedLocations = sortedlocations.map((item, i , coll) =>{
    return coll[coll.length - i - 1];
});
console.log(reversedSortedLocations);


//.Show that your array is still in its original order by printing it again.

console.log(locations);

//.Reverse the order of your list . Prit the array to show that its order has changesd.

locations.reverse();
console.log(locations);

//.Reverse the order of your list again . Print  the list to show it's back to its order has been changed.

locations.reverse();
console.log(locations);

//.Sort your array so it's stored in alphabetical order . print the array to show that its order has been changed.

locations.sort();
console.log(locations);

//.Sort to change your array sso it's stored in reverse alphbabetical order. print the list to show that it's order has changed.

locations.reverse();
console.log(locations);

