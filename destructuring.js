// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]


const [x, y] = numbers;

function boxify (num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));
const student = {
  name: 'Salib Khan',
  age: 32,
  documentary: ['king', 'dhaka']
}

const [firstDocumentary, secondDocumentary] = student.documentary;


// object destructuring
const {name, age} = {name: 'alu', age: 14}
const {name2, age2} = {id: 12, name: 'alu', salary: 34000, age: 14};

const employee = {
  ide: 'VS Code',
  designation: 'developer',
  machine: 'mac',
  languages: ['html', 'css', 'js'],
  specification: {
    height: 66,
    weight: 67,
    address: 'new york',
    drink: 'water',
    watch: {
      color: 'black',
      price: 500,
      brand: 'garmin'
    }
  }
}
const employee2 = {
  ide: 'VS Code',
  designation: 'developer',
  machine: 'mac',
  languages: ['html', 'css', 'js'],
  specification: {
    height: 66,
    weight: 67,
    address: 'new york',
    drink: 'water',
    watch: {
      color: 'black',
      price: 500,
    }
  }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const [firstLanguage, secondLanguage, thirdLanguage] = employee.languages;
console.log(firstLanguage, secondLanguage, thirdLanguage);
const {brand} = employee2?.specification?.watch;
console.log(brand);
if(brand) {
  console.log(brand);
}