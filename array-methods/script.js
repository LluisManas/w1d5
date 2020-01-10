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

const cities = ["berlin", "amsterdam", "london"];

const upperCasedCities = cities.map(function(city, index, array) {
  //   console.log(city, index, array);
  return city.toUpperCase();
});

// console.log(upperCasedCities);

function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i], i, array);
    result.push(value);
  }

  return result;
  //   map returns an array, a new array, of the same length of the original array
}

function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
  //   does not return anything
}

const garage = [
  {
    make: "Toyota",
    model: "Prius",
    year: 2004,
    miles: 150000
  },
  {
    make: "BMW",
    model: "3 series",
    year: 2010,
    miles: 90000
  },
  {
    make: "Audi",
    model: "A4",
    year: 2010,
    miles: 80000
  }
];

// ["Toyota", "BMW", "Audi"]
const carMakes = garage.map(function(car) {
  return car.make;
});

// Create a `newGarage` array where all the cars would also have a `kms` property that would be converted from the `miles`

// const newGarage = customMap(garage, function(car) {
const newGarage = garage.map(function(car) {
  //   car.kms = car.miles * 1.6; ❌ mutates the objects in the original array
  //   return car; ❌

  return {
    make: car.make,
    model: car.model,
    year: car.year,
    miles: car.miles,
    kms: car.miles * 1.6
  };

  //   return {
  //     ...car,
  //     kms: car.miles * 1.6
  //   };

  //   const carShallowCopy = Object.assign({}, car);
  //   carShallowCopy.kms = car.miles * 1.6;

  //   return carShallowCopy;
});

console.table(newGarage);

console.clear();

/*
let sum = 0;
for (const number of [1, 3, 5]) {
  sum += number;
}
*/

// digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = [1, 3, 5].reduce(function(accumulator, currentValue) {
  //   console.log(accumulator, currentValue);
  return accumulator + currentValue;
});

const carModels = garage.reduce(function(accumulator, value, index, array) {
  //
  if (index === array.length - 1) {
    // this is the last element
    return accumulator + value.model;
  }
  return accumulator + value.model + ", ";
}, "");

const upperCasedCarMakesString = carMakes.reduce(function(
  accumulator,
  value,
  index,
  array
) {
  if (index === array.length - 1) {
    // this is the last element
    return accumulator + value.toUpperCase();
  }
  return accumulator + value.toUpperCase() + ", ";
});

const sumMileages = garage.reduce(function(accumulator, currentCar) {
  return accumulator + currentCar.miles;
}, 0);

// const odds = [];

// digits.forEach(function(digit) {
//   if (digit % 2 === 1) {
//     odds.push(digit);
//   }
// });

const odds = digits.filter(function(digit) {
  if (digit % 2 === 1) {
    return true;
  }
});

const students = [
  {
    name: "Mia",
    language: "finnish"
  },
  {
    name: "Elsa",
    language: "greek"
  },
  {
    name: "Ciwan",
    language: "arabic"
  },
  {
    name: "Johnny",
    language: "english"
  },
  {
    name: "Tim",
    language: "english"
  }
];

const englishSpeakers = students
  .filter(function(student) {
    if (student.language === "english") {
      return true;
    }
  })
  .map(function(student) {
    return student.name;
  });

// const englishSpeakers = students.reduce(function(accumulator, currentStudent) {
//   if (currentStudent.language === "english") {
//     accumulator.push(currentStudent.name);
//   }
//   return accumulator;
// }, []);

// ["Johnny", "Tim"]

// 🚨🚨🚨 ⬇️ MUTATE ⬇️ 🚨🚨🚨

const randomNumbers = [3, 1, 9, 8, 42, 1221, -5];

// sort mutates the array in place and returns a reference to the mutated array
const sortedNumbers = randomNumbers.slice().sort(function(a, b) {
  /*
    // ascending order
  if (a > b) {
    return 1; // positive number
  }
  if (a === b) {
    return 0; // 0 => order remains
  }
  if (b > a) {
    return -1; // negative number
  }
  */
  return a - b;
});

const sortedGarage = garage.slice().sort(function(a, b) {
  if (a.year === b.year) {
    // return a.miles - b.miles;
    return b.make.localeCompare(a.make);
  }
  return a.year - b.year;
});

console.table(garage);

const reversed = garage.reverse();
// reverse, as sort does, mutates the array in place, and returns a reference to the mutated array
// reversed === garage; // true

console.table(garage);

// deep clone -> JSON.parse(JSON.stringify(obj)); ⚠️ -> no methods
// implement it with recursive shallow copies; ⚠️ -> difficult to handle all edge cases
// library -> https://lodash.com/docs/4.17.15#cloneDeep
