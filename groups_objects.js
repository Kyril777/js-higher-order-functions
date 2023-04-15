/* Group people by state using the reduce() function. */

let people = [
  { name: "Helen", state: "Ohio" },
  { name: "Vee", state: "North Carolina" },
  { name: "Cade", state: "North Carolina" },
  { name: "Alex", state: "Arizona" },
  { name: "DeAnda", state: "Montana" },
  { name: "Stephanie", state: "North Carolina" },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "state");
console.log(groupedPeople);

/*
{
  Ohio: [ { name: 'Helen', state: 'Ohio' } ],
  'North Carolina': [
    { name: 'Vee', state: 'North Carolina' },
    { name: 'Cade', state: 'North Carolina' },
    { name: 'Stephanie', state: 'North Carolina' }
  ],
  Arizona: [ { name: 'Alex', state: 'Arizona' } ],
  Montana: [ { name: 'DeAnda', state: 'Montana' } ]
}

*/
