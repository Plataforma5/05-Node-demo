// event loop - setTimeout

setTimeout(() => {
  console.log("TIMEOUT");
}, 0);

let num = 0;

fs.readFile(nombre, function (err, file) {
  num = file;

  console.log(num);
});
