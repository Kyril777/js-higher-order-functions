/* Search for students using the filter() method. */

const garibaldi = new Student('Garibaldi', 'June',
     '', 'Rutgers');
garibaldi.address = new Address('US');

const colson = new Student('Colson', 'Jessica',
     '', 'McGill');
colson.address = new Address('Canada');

const easterbrook = new Student('Easterbrook', 'Pete',
   '', 'Rutgers');
easterbrook.address = new Address('US');

const rush = new Student('Rush', 'Sally',
    '', 'Central Florida');
rush.address = new Address('US');

let selector = (country, school) => {
   return function(student) { 
      return student.address.country() === country &&
          student.school() === school;
     };
}

let searchStudents = function(friends, selector) {
    return friends.filter(selector);
};

searchStudents([garibaldi, colson, easterbrook, rush], 
  selector('Canada', 'McGill')); 
