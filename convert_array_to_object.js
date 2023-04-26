/* Use the reduce() method to convert an array of objects into one object. */

const students = [
  { name: "Stan", grade: 87 },
  { name: "Clara", grade: 95 },
  { name: "Manal", grade: 80 }
];

const studentObj = students.reduce((obj, student) => {
  obj[student.name] = student.grade;
  return obj;
}, {})

console.log(studentObj); // { Clara: 95, Manal: 80, Stan: 87 }
