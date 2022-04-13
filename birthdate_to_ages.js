/* Use the map method to determine age by birthyear in 2022.  */

let determineAges = () => {
  const birthYear = [1965, 1970, 1980, 1990, 2000]
  let ages = birthYear.map(year => 2022 - year + ' ') 
  return ages
}
