numero = prompt("Digite os nºs separados por vírgula");
ns = numero.split(",");
for (i = 0; i < numero.length; i++) {
  ns = parseInt(numero[i]);
  if (ns % 2 == 0) {
    console.log(numero[i]);
  }
}
