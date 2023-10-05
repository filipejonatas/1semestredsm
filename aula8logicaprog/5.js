disciplina = {
    nome: "Algoritmos",
    carga: 80,
    notas: [
    {
    peso: 0.25,
    nota: 8.2
    },
    {
    peso: 0.35,
    nota: 7.5
    },
    {
    peso: 0.4,
    nota: 9
    }
    ]
    }
    p1=disciplina.notas[0].peso*disciplina.notas[0].nota;
    p2=disciplina.notas[1].peso*disciplina.notas[1].nota;
    p3=disciplina.notas[2].peso*disciplina.notas[2].nota;
    nf=p1+p2+p3;
    console.log("P1:",p1,"P2",p2,"P3",p3,"Soma Final",nf);
    