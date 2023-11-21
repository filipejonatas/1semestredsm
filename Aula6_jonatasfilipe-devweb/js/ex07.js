function exer7() {
  entrada = document.querySelector("#entrada").value;
  //cria o elemento ol
  var ol = document.createElement("ol");
  //pega o texto digitado anteriormente e aplica no elemento ol
  const texto = document.createTextNode(entrada);
  ol.appendChild(texto);
  //cria div filho como saída
  var lista = document.querySelector("#saida");
  lista.appendChild(ol);
  let atributo = document.createAttribute("title");
  atributo.value = entrada;
  ol.setAttributeNode(atributo);
}
