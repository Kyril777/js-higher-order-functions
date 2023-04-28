/* Use the map() method to combine two elements within an object. */

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
/*
"array", [[object Object] {
  firstName: "Tommy",
  lastName: "Twiston"
}, [object Object] {
  firstName: "Lenny",
  lastName: "Lee"
}, [object Object] {
  firstName: "Tony",
  lastName: "Tennyson"
}]
*/
console.log("newArray", newArray);
/* 
"newArray", [[object Object] {
  fullName: "Tommy Twiston"
}, [object Object] {
  fullName: "Lenny Lee"
}, [object Object] {
  fullName: "Tony Tennyson"
}]
*/
