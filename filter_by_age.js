/* Use filter method to print all students are 21 or older. */

const students = [
  {id: 984, name: "Leslie", age: 23 },
  {id: 443, name: "Avery", age: 18 },
  {id: 206, name: "Madison", age: 19 },
  {id: 771, name: "Jean", age: 20 },
  {id: 905, name: "Harper", age: 21 }
];

// Filter by age.
const studentList = students.filter((student) => student.age > 21 )
console.log(studentList); // { age: 23, id: 984, name: "Leslie" }], { age: 21, id: 905, name: "Harper" }]
