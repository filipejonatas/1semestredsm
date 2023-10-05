numero = prompt("Digite os nºs separados por vírgula");
numero = numero.split(',');
for(i=0;i<numero.length;i++){
    numero[i]=parseInt(numero[i]);
    console.log(numero[i]);
}
