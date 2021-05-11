const chalk = require("chalk");
const language = "en";

function greetings(name) {
  if (language === "en") {
    console.log(chalk.blue(`Welcome ${name}`));
  }

  if (language === "es") {
    console.log(chalk.blue(`Bienvenido ${name}`));
  }

  if (language === "de") {
    console.log(chalk.blue(`Herzlich Willkommen ${name}`));
  }
}

module.exports = greetings;
