function formatar(entrada: string) {
  const textos = entrada.split(";");
  const obj: {
    logradouro: textos[0],
    bairro: textos[1],
    municipio: textos[2],
    UF: textos[3],
    CEP: textos[4],
  };
  return obj;
}
const endereco =
  "R. Faria Lima, 155; Jardim Santa Maria; Jacareí; SP; 12328-070";
const resposta = formatar(endereco);
console.log(resposta);

export {};
