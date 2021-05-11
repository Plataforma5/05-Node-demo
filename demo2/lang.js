const language = "en";

function greetings(name) {
  if (language === "en") {
    console.log(`Welcome ${name}`);
  }

  if (language === "es") {
    console.log(`Bienvenido ${name}`);
  }

  if (language === "de") {
    console.log(`Herzlich Willkommen ${name}`);
  }
}

module.exports = greetings;
