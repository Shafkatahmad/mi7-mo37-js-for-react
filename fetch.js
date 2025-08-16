// 1. JSON => stringify, parse

const student = {
  name: 'Salib Khan',
  age: 32,
  documentary: ['king', 'dhaka']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);


//2. fetch
// fetch('url');
// .then(res => res.json());
// .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 54, 6787, 23, 78];
numbers.forEach(num => console.log(num));
const double = numbers.map(num => num*2)

// for of on array like object
// for in to loop on an object


// add or remove from an array
const products = [
  {name: 'laptop', price: 32000, brand: 'len', color: 'silver'},
  {name: 'phone', price: 7000, brand: 'htc', color: 'golden'},
  {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
  {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
  {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove a property means create a new array without the property
const remaining = products.filter(product => product.name !== 'phone');