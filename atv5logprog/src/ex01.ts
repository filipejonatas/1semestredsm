function converter(entrada: string) {
  const textos = entrada.split(",");
    const nros: number[] = [];
  let i: number = 0;
  for (i = 0; i < textos.length; i++) {
    nros[i] = parseInt(textos[i]);
  }
  return nros;
}
const teste = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);

export{}


