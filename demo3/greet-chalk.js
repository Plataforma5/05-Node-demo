// import chalk
const chalk = require("chalk");
const language = require("./lang");

const log = function (values) {
  console.log(chalk.red(values));
};

function greetings(name) {
  if (language === "en") {
    log(`Welcome ${name}`);
  }

  if (language === "es") {
    log(`Bienvenido ${name}`);
  }

  if (language === "de") {
    log(`Willkommen ${name}`);
  }
}

module.exports = { greetings, saludar };
