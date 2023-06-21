function idealWeight(height, gender) {
  console.log(height);
  let weight = 0;
  if (gender === "male") {
    weight = 22 * Math.pow(height, 2);
  } else {
    weight = 21 * Math.pow(height, 2);
  }
  return weight;
}

console.log(idealWeight(1.8, "female"));
