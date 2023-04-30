/* Use the sort() method to list last names in alphabetical order. */

const names = [
  {firstName: "Yolanda", lastName: "Jacobs"},
  {firstName: "Caitlyn", lastName: "Zukowski"},
  {firstName: "Vee", lastName: "Jackson"},
  {firstName: "Nial", lastName: "Aaronson"},  
  {firstName: "Brenda", lastName: "Lee"}
];

name.sort((a, b)=>{
  const x = a.lastName;
  const y = b.lastName;
  if (x>y) return 1;
  if (x <y) return -1;
});

console.log(names);

/* 
[{
  firstName: "Nial",
  lastName: "Aaronson"
}, [object Object] {
  firstName: "Vee",
  lastName: "Jackson"
}, [object Object] {
  firstName: "Yolanda",
  lastName: "Jacobs"
}, [object Object] {
  firstName: "Brenda",
  lastName: "Lee"
}, [object Object] {
  firstName: "Caitlyn",
  lastName: "Zukowski"
}]
*/
