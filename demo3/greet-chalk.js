// import chalk

const language = require("./lang");

const log = function (values) {
  console.log(chalk.green(values));
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

module.exports = greetings;
