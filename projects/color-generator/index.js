import chalk from 'chalk';
import ColorGenerator from 'random-color-array-generator';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});
console.log(color);

console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#######           #######'));
console.log(chalk.hex(color).bold(`#######  ${color}  #######`));
console.log(chalk.hex(color).bold('#######           #######'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
