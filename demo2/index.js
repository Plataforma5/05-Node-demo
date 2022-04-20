// importarlo el modulo lang
// exportar su contenido
// utilizarlo
const fs = require("fs");
const greetings = require("./greet");
const saludo = "hola";
// importar fs para leer un archivo

fs.readFile("name.txt", function (error, file) {
  if (error) throw new Error("File not read");
  greetings(saludo + file);
});

// direcciones absolutas vs relativas

// console.log(__dirname + "/greet.js");

// relativa: "./lang.js"
// absoluta: "/Users/cafeparatodos/plataforma/bootcamp/demos/node/demo2/lang.js"
