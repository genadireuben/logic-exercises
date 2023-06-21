function evenOrOdd(param) {
  return param % 2 === 0 ? "número é par" : "número é ímpar";
}

for (let index = 0; index <= 10; index++) {
  console.log(evenOrOdd(index));
}
