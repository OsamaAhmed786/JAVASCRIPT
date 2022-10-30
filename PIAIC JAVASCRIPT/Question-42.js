/*42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/


let magician = ["jackson", "steve", "kali", "babar"];
function show_magicians(magicianNames) {
    magicianNames.map((item) => {
        console.log(item);
    });
}
show_magicians(magician);


function make_great() {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = 'The Great' + magician;
    }
}
make_great();
show_magicians(magician);


