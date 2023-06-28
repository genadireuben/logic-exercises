const students = [
  {
    name: "Barret Stennings",
    n1: 0.3,
    n2: 2.7,
    n3: 6.9,
    n4: 1.4,
  },
  {
    name: "Danyette Louch",
    n1: 6.6,
    n2: 8.8,
    n3: 0.0,
    n4: 1.7,
  },
  {
    name: "Patty Spada",
    n1: 2.8,
    n2: 2.9,
    n3: 4.6,
    n4: 6.5,
  },
  {
    name: "Estella Ciccottio",
    n1: 7.5,
    n2: 9.6,
    n3: 4.5,
    n4: 0.9,
  },
  {
    name: "Lyndel Crandon",
    n1: 7.9,
    n2: 4.7,
    n3: 9.3,
    n4: 6.4,
  },
  {
    name: "Kliment Dunbar",
    n1: 9.9,
    n2: 3.8,
    n3: 6.4,
    n4: 9.2,
  },
  {
    name: "Malissia Toope",
    n1: 3.0,
    n2: 4.8,
    n3: 5.3,
    n4: 1.6,
  },
  {
    name: "Ashlee Cafe",
    n1: 3.8,
    n2: 5.1,
    n3: 4.0,
    n4: 7.8,
  },
  {
    name: "Ulrich De Ruggiero",
    n1: 8.8,
    n2: 9.8,
    n3: 1.6,
    n4: 6.9,
  },
  {
    name: "Jaquelin Guye",
    n1: 7.5,
    n2: 8.7,
    n3: 1.0,
    n4: 6.8,
  },
];

const studentsAverageGrades = students.map((student) => {
  return {
    name: student.name,
    average: Number(
      ((student.n1 + student.n2 + student.n3 + student.n4) / 4).toFixed(1)
    ),
  };
});
// console.log(studentsAverageGrades);

Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    if (fn(this[index])) {
      newArray.push(this[index]);
    }
  }
  return newArray;
};

const aprovedStudents = studentsAverageGrades.myFilter(
  (item) => item.average >= 6
);

console.log(aprovedStudents);
