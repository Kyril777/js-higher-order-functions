/* Use the map method to determine age by birthyear in 2021.  */

let determineAges = () => {
  const birthYear = [1965, 1970, 1980, 1990, 2000]
  let ages = birthYear.map(year => 2020 - year + ' ') 
  return ages
}
