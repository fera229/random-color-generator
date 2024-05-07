// Import `chalk` and `randomcolor` dependencies
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Function to print the output pattern in color
function printResult(color) {
  // Define the different lines that will form the pattern
  const longLine = chalk.hex(color)('#'.repeat(31)); // long line of 31 `#` characters
  const shortLine = chalk.hex(color)('#'.repeat(5)); // Short line of 5 `#` characters
  const spaces7 = ' '.repeat(7); // Empty spaces of 7 characters

  // Construct the final pattern using all lines and spaces, then print it
  console.log(`
${longLine}
${longLine}
${longLine}
${shortLine}${spaces7}${spaces7}${spaces7}${shortLine}
${shortLine}${spaces7}${chalk.hex(color)(color)}${spaces7}${shortLine}
${shortLine}${spaces7}${spaces7}${spaces7}${shortLine}
${longLine}
${longLine}
${longLine}
`);
}

// Generate a random color based on command-line arguments
const hue = process.argv[2]; // Hue input (e.g., "red", "blue", etc.)
const luminosity = process.argv[3]; // Luminosity input (e.g., "dark", "light", etc.)

// Generate the color based on the user inputs
const color = randomColor({ luminosity: `${luminosity}`, hue: `${hue}` });

// Call the print function with the generated color
printResult(color);
