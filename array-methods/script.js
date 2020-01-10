const digits = [1, 2, 3, 4, 6, 7, 8];

// these methods mutate the array
digits.unshift(0);
digits.splice(5, 0, 5);
digits.push(9);

const doubles = [];
// forEach does not mutate the original array
const foo = digits.forEach(function(digit) {
  doubles.push(digit * 2);
});

// console.log(foo); // undefined
// console.log(doubles);

const squares = digits.map(function(digit) {
  return digit * digit;
});

console.log(digits);
console.log(squares);

console.clear();

const cities = ["berlin", "amsterdam", "london"];

const upperCasedCities = cities.map(function(city, index) {
  console.log(city, index);
  return city.toUpperCase();
});

console.log(upperCasedCities);
