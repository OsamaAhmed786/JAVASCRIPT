/*43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

let magician = ["jackson", "steve", "kali", "babar"];
let greatMagicians = [];

function show_magicians(magicianNames) {
    magicianNames.map((item)  => {
        console.log(item);
    })
}

function make_great(magician) {
    for (let i = 0; i <magician.length; i++) {
        greatMagicians[i] = 'the great '+ magician;
    }
}

make_great(magician)

show_magicians(magician);
show_magicians(greatMagicians);
