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
