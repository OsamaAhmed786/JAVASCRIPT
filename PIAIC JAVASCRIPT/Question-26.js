/* 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

let alien_color = "green";

//.if the Alien's color is green, print a statment thhat the player just earned 5  points for shooting the alien.

if (alien_color === "green");

console.log ("player just earned 5  points for shooting the alien");

//.if the Alien's color isnt green, print the statment that the player just earned 10 points.


alien_color  = "red";
alien_color !== "green" && console.log ("player just earned 10 points");


//.write one version of the program that runs the if block and another that runs the else block.

if (alien_color === "green"){
    console.log ("player just earned 5  points for shooting the alien");
 
} else {
    console.log ("player just earned 10 points"); 
}
