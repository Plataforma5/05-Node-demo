const date = new Date(); // hora actual

const initial = date.getTime();

setTimeout(function () {
  console.log("Esto deberia pasar inmediatamente");
}, 0);

let current = new Date().getTime();

while (initial + 3000 > current) {
  current = new Date().getTime();
}

console.log("Fin del archivo");
