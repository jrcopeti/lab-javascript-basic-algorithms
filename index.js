// Iteration 1: Names and Input
const hacker1 = "José";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Santa";
console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals
const hasLongerName = () => {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
};

hasLongerName();

// Iteration 3: Loops

console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker2.split("").reverse().join(" "));

// Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

const sortHackers = () => {
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
};

sortHackers();
