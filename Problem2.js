// Create a custom implementation of a commonly used higher-order function (e.g., a map,reduce function) that mimics the behavior of the native implementation.

const numbers = [1, 2, 3, 4, 5];

// Custom Map Function

function customMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log("Custom map:", doubledNumbers);

// Custom ForEach
function customForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
console.log("Custom forEach:");
customForEach(numbers, (num) => console.log(num));

// Custom Filter
function customFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log("Custom filter:", evenNumbers);
