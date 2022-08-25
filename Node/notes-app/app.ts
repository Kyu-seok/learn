// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const log = console.log;

console.log(getNotes());
log(chalk.green('Success'));
log(chalk.bold.green('Success'));
log(chalk.bold.inverse.red('Error'));
log(chalk.rgb(15, 100, 204).inverse('Hello'))

export {};