const greetings = require("./greet-chalk");
const user = require("./name.json"); // también podemos importar archivos json

greetings(`${user.name} ${user.lastname}`);

// greetings("facu");
// setLanguage("de");
// greetings("facu");
