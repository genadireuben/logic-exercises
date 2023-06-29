const returnFirstElement = (arr) => arr[0];

const myPromise = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

myPromise
  .then((resp) => returnFirstElement(resp))
  .then((el) => console.log(el));
console.log(myPromise);
