function exer5() {
    entrada = document.querySelector("#entrada").value
        //cria o elemento p
   const p = document.createElement("p");
   //pega o texto digitado anteriormente e aplica no elemento p
   const texto = document.createTextNode(entrada);
   p.appendChild(texto);
   //cria div filho como saída
   var divfilho = document.querySelector("#saida");
   divfilho.appendChild(p);
 }
 