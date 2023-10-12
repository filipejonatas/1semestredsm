let par = 0;
while (par < 6) {
  nro = Math.random() * 100;
  nro = Math.floor(nro);
  if (nro % 2 == 0) {
    console.log(nro);
    par++;
  }
}
