use strict';

function doubleOddNumbers(numbers) {
  const myNewNumbers = numbers
    .filter(newNumbers => newNumbers % 2 !== 0)
    .map(newNumbers => newNumbers * 2);
  return myNewNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
