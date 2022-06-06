/* 1.1 Rewrite the below doubleOddNumbers function using map and filter; don't forget to use =>

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

*/


let numbers =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const doubleOddNumbers = numbers.filter(newNumbers => (newNumbers % 2 !== 0)).map(newnumbers => (newnumbers * 2))

console.log(doubleOddNumbers)

// result: [2, 6, 10, 14, 18]