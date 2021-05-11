// VARIABLES GLOBALES

console.log(this); // variable Global

console.log(process); // Información del proceso en ejecucion

console.log(window); // No existe
console.log(document); // No existe

// Objetos de siempre

const date = new Date();
const error = new Error();

setTimeout(() => console.log("Node!"), 3000);
