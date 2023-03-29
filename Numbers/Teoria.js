const a = 1;
const b = 3;
const c = -3;
const d = 2.56
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(1 + 2);
console.log(a + b);
console.log(c * d);

const candies = 10;
const kids = 3;
const candiesPerKid = Math.floor(candies / kids);
console.log(candiesPerKid);
// Math.round()
// Math.floor()
// Math.ceil()
// Math.random()

console.log(Math.round(1.5));
console.log(Math.random());

const random = Math.random();
const limit = 100;
const calculateRandom = (Math.floor(random*limit));
console.log(calculateRandom);

// % Resto de una division
console.log(candies % kids);