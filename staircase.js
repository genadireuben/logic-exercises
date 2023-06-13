const n = 5;

function staircase(n) {
  const space = " ";
  const hash = "#";
  let line = "";
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex++) {
    for (let colIndex = 0; colIndex < n; colIndex++) {
      if (colIndex < inputPosition) {
        line += space;
      } else {
        line += hash;
      }
    }
    console.log(line);
    line = "";
    inputPosition -= 1;
  }
}

staircase(50);
