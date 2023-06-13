function migratoryBirds(arr) {
  let spotteds = {};

  arr.forEach((item) => {
    return (spotteds[item] = (spotteds[item] ?? 0) + 1);
  });

  const maxValue = Math.max(...Object.values(spotteds));

  const num = Object.keys(spotteds).find((key) => {
    return spotteds[key] === maxValue;
  });
  return spotteds;
}

const myArr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5];
console.log(migratoryBirds(myArr));
