/* Use the map method to determine age by birthyear in 2022.  */

let determineAges = () => {
  const birthYear = [1965, 1970, 1980, 1990, 2000]
  let ages = birthYear.map(year => 2022 - year + ' ') 
  return ages
}

/* Using consts instead of one functon. */

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2022 - year);

console.log(ages);
