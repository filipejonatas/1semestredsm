disciplina = {
  nome: "Algoritmos",
  carga: 80,
  pesos: [0.25, 0.35, 0.4],
  notas: [8.2, 7.5, 9],
};
pesos = disciplina.pesos;
notas = disciplina.notas;
p1 = pesos[0] * notas[0];
p2 = pesos[1] * notas[1];
p3 = pesos[2] * notas[2];
nf=p1+p2+p3;
console.log("P1:",p1,"P2:",p2,"P3:",p3,"Soma Final",nf);

