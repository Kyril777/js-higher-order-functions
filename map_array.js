/* The map function takes an array, calls a function on every element, which then populates a new array. */

const companies = [
  { id: 1, name: "Nintendo",  founded: 1889 },
  { id: 2, name: "YouTube", founded: 2005 },
  { id: 3, name: "DuPont", founded: 1897 },
  { id: 4, name: "Pizza Hut", founded: 1958 },
  { id: 5, name: "Advance Auto Parts", founded: 1932 },
  { id: 6, name: "Starbucks", founded: 1971 },
  { id: 7, name: "Pepsi Cola", founded: 1902 },
  { id: 8, name: "AT&T", founded: 1876 },
  { id: 9, name: "StubHub", founded: 2000 }
];


const description = companies.map(
  company =>
    `${company.name} was founded in ${company.founded}`
);

description.forEach(d => output(d));
