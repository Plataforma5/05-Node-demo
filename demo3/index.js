const greetings = require("./greet-chalk");
const user = require("./name"); // tambien podemos importar archivos json

greetings(`${user.name} ${user.lastname}`);

// greetings("facu");
// setLanguage("de");
// greetings("facu");
