// VARIABLES GLOBALES

// console.log(this); // variable Global
// console.log(process); // Información del proceso en ejecucion
// console.log(window); // window no existe
// console.log(document); // document no existe

// // Objetos de siempre como Date o Error

const date = new Date();
const error = new Error("Hubo un error");

// console.log(date);
// console.log(error);

// // metodos globales como setTimeout

setInterval(() => console.log("Node!"), 1000);
