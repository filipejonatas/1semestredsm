numero = prompt("Digite os nºs separados por vírgula");
numero = numero.split(',');
sum=0;
for(i=0;i<numero.length;i=i+2){
    sum=sum+parseInt(numero[i]);   
}
console.log(sum);