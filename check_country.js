/* The filer() function accepts two functions: an array and a function. */ 

checkCountry = ({name, country}) => country === 'US';

const user = [
  {
    name : 'Shay',
    country : 'US'
  },
  {
    name : 'Deanna',
    country : 'UK'
  },
  {
    name : 'Par',
    country : 'US'
  }
]

function filter(arr,fn) {

    let newArr = [];
    for(var i=0;i< arr.length;i++){
      let value = arr[i];

      newArr = fn(value) ? [...newArr,value] : [...newArr]
    }
    return newArr;
} 

const userList = filter(user,checkCountry)


console.log(userList);
