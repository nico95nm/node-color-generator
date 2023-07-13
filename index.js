import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#######           #######'));
console.log(chalk.hex(color).bold(`#######  ${color}  #######`));
console.log(chalk.hex(color).bold('#######           #######'));
console.log(chalk.hex(color).bold('#########################'));
console.log(chalk.hex(color).bold('#########################'));
