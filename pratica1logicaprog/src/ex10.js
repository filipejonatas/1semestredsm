let i = 0;
while (i < 6) {
  nro = Math.random() * 100;
  nro = Math.floor(nro);
  if (nro <50 && nro %2 !=0 || nro>50 && nro %2 ==0) {
    console.log(nro);
    i++;
  }
}
