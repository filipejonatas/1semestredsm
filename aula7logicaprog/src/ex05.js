numero = prompt("Digite os nºs separados por vírgula");
numero = numero.split(',');
sum=0;
for(i=0;i<numero.length;i++){
    numero=parseInt(numero[i]);
    sum = sum + numero[i];
}
console.log("Somatório",sum);