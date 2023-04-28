let array = [
	{
  	firstName: "Tommy",
    lastName: "Twiston"
  },
	{
  	firstName: "Lenny",
    lastName: "Lee"
  },
	{
  	firstName: "Tony",
    lastName: "Tennyson"
  }
];

let newArray = array.map ((e) => {
	let fullName = e.firstName + " " + e.lastName;
  return { fullName : fullName }
});

console.log("array", array);
console.log("newArray", newArray);
