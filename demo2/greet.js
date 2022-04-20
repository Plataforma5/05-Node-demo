const language = require("./lang");

function greetings(name) {
  if (language === "en") {
    console.log(`Welcome ${name}`);
  }

  if (language === "es") {
    console.log(`Bienvenido ${name}`);
  }

  if (language === "de") {
    console.log(`Willkommen ${name}`);
  }
}

module.exports = greetings;
