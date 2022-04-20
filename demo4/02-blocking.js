const date = new Date(); // hora actual
console.log("Inicio del archivo");
const initial = date.getTime(); // tiempo en milisegundos

setTimeout(function () {
  console.log("Esto deberia pasar inmediatamente");
}, 0);

let current = new Date().getTime();

while (initial + 3000 > current) {
  current = new Date().getTime();
}

console.log("Fin del archivo");
