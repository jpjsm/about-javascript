let x1;
x1 = 0;
console.log(x1); // 0
x1;
x2 = 0.001;
console.log(x2); // 0.001
x3 = true;
console.log(x3);
x3 = false;
console.log(x3);
x4 = null;
console.log(x4);
x5 = undefined;
console.log(x5);
x6 = 'Hello World!';
console.log(x6);

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {
  // Objects are enclosed in curly braces.
  topic: 'JavaScript', // The property "topic" has value "JavaScript."
  edition: 7, // The property "edition" has value 7
}; // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
console.log(book.topic); // => "JavaScript"
console.log(book['edition']); // => 7: another way to access property values.
book.author = 'Flanagan'; // Create new properties by assignment.
console.log(book.author); // => "Flanagan"
console.log(book.contents); // => {}
console.log(book);
console.log(book.contents?.ch01?.sect1); // => undefined: no contents property

foo = [2, 3, 5, 7];
console.log(foo);

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
console.log(primes[0]); // => 2: the first element (index 0) of the array.
console.log(primes.length); // => 4: how many elements in the array.
console.log(primes[primes.length - 1]); // => 7: the last element of the array.
console.log(primes[4]); // => undefined: there is no element with index 4.
primes[4] = 9; // Add a new element by assignment.
console.log(primes[4]); // => 9: the newly added element.
primes[4] = 11; // Or alter an existing element by assignment.
console.log(primes[4]); // => 11: the altered element.
let empty = []; // [] is an empty array with no elements.
console.log(empty.length); // => 0

// Arrays and objects can hold other arrays and objects:
let points = [
  // An array with 2 elements.
  { x: 0, y: 0 }, // Each element is an object.
  { x: 1, y: 1 },
];
console.log(points); // the array of objects.
console.log(points[1].y); // => 1: the y property of the second element of the array.
let data = {
  // An object with 2 properties
  trial1: [
    [1, 2],
    [3, 4],
  ], // The value of each property is an array.
  trial2: [
    [2, 3],
    [4, 5],
  ], // The elements of the arrays are arrays.
};
console.log(data);
console.log(data.trial1); // the value of the trial1 property: an array of arrays.
console.log(data.trial1[1]); // => [3, 4]: the second element of that array.
console.log(data.trial1[1][0]); // => 3: the first element of that array.

console.log(3 + 2); // => 5
console.log(3 - 2); // => 1
console.log(3 * 2); // => 6
console.log(3 / 2); // => 1.5
console.log(3 % 2); // => 1: the remainder of 3/2
console.log(3 ** 2); // => 9: 3^2 = 3*3
console.log((3 / 2) | 0); // => 1: integer division (floor of 3/2)

points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + b * b);
};
console.log(points.dist()); // => 1.4142135623730951: the distance between the two points.
