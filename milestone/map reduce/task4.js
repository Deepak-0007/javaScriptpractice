//Given an array of numbers, create a new array whose numbers the same if even and zero if odd. Use map

const numbers = [77];

const modifiedNumbers = numbers.map(function(number) {
  if (number % 2 === 0) {
    return number; // Even number remains the same
  } else {
    return 0; // Odd number replaced with zero
  }
});

console.log(modifiedNumbers);
