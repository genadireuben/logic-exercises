function staircase(n) {
  for (let lineIndex = 0; lineIndex < n; lineIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // console.log();
    }
  }
}

function gradeToConcept(grade) {
  const formatedGrade = Math.round(grade);
  let concept = "";

  switch (formatedGrade) {
    case 10:
      concept = "A+";
      break;
    case 9:
      concept = "A";
      break;
    case 8:
      concept = "B+";
      break;
    case 7:
      concept = "B";
      break;
    case 6:
      concept = "C+";
      break;
    case 5:
      concept = "C";
      break;
    case 4:
      concept = "D+";
      break;
    case 3:
      concept = "D";
      break;
    case 2:
      concept = "E+";
      break;
    case 1:
      concept = "E";
      break;
    case 0:
      concept = "F";
      break;

    default:
      break;
  }

  return concept;
}

// console.log(gradeToConcept(9.6));
// console.log(gradeToConcept(8.3));

const calcGrade = (grade1, grade2, grade3) => {
  const grades = [grade1, grade2, grade3];
  const lowerGrade = Math.min(...grades);
  const usefullGrades = grades
    .filter((grade) => grade !== lowerGrade)
    .reduce((acc, curr) => (acc += curr) / 2);
  return usefullGrades;
};

const isAproved = (finalScore) => {
  if (finalScore >= 7) return "Aluno aprovado";
  else if (finalScore >= 4) return "Aluno de recuperação";
  else return "Aluno reprovado";
};

// const score = calcGrade(3.25, 2.9, 0.275);
// console.log(isAproved(score));

function externa() {
  function interna() {
    return "i am in the internal function";
  }

  return interna;
}

// console.log(externa);
// console.log(externa());

// const internaExterna = externa();

// console.log(internaExterna());
// console.log(externa()());

const numbers = [7, 99, 1683, 4674, 33, 38, 47, 59];
const newArr = [];

for (let index = numbers.length - 2; index >= 0; index -= 2) {
  newArr.push(numbers[index]);
}

// console.log(newArr);

// console.log(numbers.reverse());

const invertedArray = numbers.reverse();

for (let index in invertedArray) {
  if (index % 2 === 1) {
    // console.log(invertedArray[index]);
  }
}

// console.log(invertedArray.includes(7 && 1));
// console.log(invertedArray.join(""));

// invertedArray.pop();
// console.log(invertedArray);

const people = ["Paula", "Gabriel", "Nadine", "Lucas"];

function greeting(name) {
  console.log(`Hello and welcome ${name}`);
}

function forEach(array, fn) {
  for (let index in array) {
    fn(array[index], index, array);
  }
}
// forEach(people, greeting);

// forEach(people, (name) => {
// console.log(name);
// });

const product = {
  name: "Macbook",
  price: 32000,
  discount: 0.05,
  PriceWithDiscount: function () {
    return this.price * (1 - this.discount);
  },
};

// console.log(product.PriceWithDiscount());

const data = {
  day: 15,
  month: 10,
  year: 2021,
  getFulldate: function () {
    return `${this.day}/${this.month}/${this.year}`;
  },
};

// console.log(data.getFulldate());

const cliente = {
  code: 84135,
  name: "Patricia Albuquerque",
  vip: true,
  address: {
    street: "Vaness Ada",
    number: 458,
    addressMore: "cj 302 C",
    references: ["Hospital São Pedro", "Shoppings centro"],
  },
};

const averageGrade = (grades) => {
  if (!Array.isArray(grades)) return null;

  let average = 0;
  for (let grade of grades) {
    average += grade;
  }
  return average / grades.length;
};

const student = {
  name: "Pedrinho",
  classes: [
    { name: "English", grades: [7, 6, 8] },
    { name: "Mathematics", grades: [8, 7, 9] },
    { name: "Spanish", grades: [3, 5, 7] },
  ],
  getFinalGrade() {
    return averageGrade(this.classes.map((item) => averageGrade(item.grades)));
  },
};

// console.log(student.getFinalGrade());

const classes = [
  { name: "English", grades: [7, 6, 8] },
  { name: "Mathematics", grades: [8, 7, 9] },
  { name: "Spanish", grades: [3, 5, 7] },
];

function CreateStudent(name, classes) {
  this.name = name;
  this.classes = classes;

  this.getFinalGrade = function () {
    return averageGrade(this.classes.map((item) => averageGrade(item.grades)));
  };
}

const student2 = new CreateStudent("Joao", classes);
console.log(student2.getFinalGrade());
