const greetings = require("./lang-chalk");
const user = require("./name.json");

function getFullName(user) {
  return `${user.name} ${user.lastname}`;
}

const name = getFullName(user);

greetings(name);
