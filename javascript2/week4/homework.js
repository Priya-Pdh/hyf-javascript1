
2.1 
'use strict';

function foo(func) {
  // What to do here?
  console.log('Hello, I am foo');
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
// ‘Hello, I am foo’

//If foo(bar()) -> results both console.log


2.2 
'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  
  for (let i=0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i]% 5 === 0){
    threeCallback(numbers[i])
    fiveCallback(numbers[i])
  } else if (numbers[i] % 3 === 0) {
    threeCallback(numbers[i])
  } 
    else if (numbers[i]% 5 === 0) {
     fiveCallback(numbers[i]) 
    }
  }
}
function sayThree(number) {
  console.log(number + " is divisible by 3");
}

function sayFive(number) {
  console.log(number + " is divisible by 5");
}

 threeFive(10, 15, sayThree, sayFive);


2.3.1 //with a for loop

'use strict';

function repeatStringNumTimes(str, num) {
  let newString= "";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
    return newString;
  }
  
  repeatStringNumTimes("abc", 3);
  //result: ‘abcabcabc’
  


2.3.2 //with a while loop

'use strict';

function repeatStringNumTimes(str, num) {
  let newString= "";
  let i= 0;
  while (i < num) {
    newString += str;
   i++; }
    return newString;
  }
  
  repeatStringNumTimes("xyz", 3);
  //result: ‘xyzxyzxyz
  

2.3.3  //with a do..while loop

'use strict';

function repeatStringNumTimes(str, num) {
  let newString= "";
  let i = 0;
   do {
     newString += str;
     i++; 
   } while (i < num); 
    return newString;
  }
  
  repeatStringNumTimes("xyz", 3);
  

2.4 
//Object oriented Programming: Defining a constructor function
'use strict';

 function Dog() {
   this.name = "Tommy"
   this.color = "white"
   this.numLegs = 2;
 }

//Object oriented Programming: Use a Constructor to Create Objects
'use strict';

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog()



2.5
'use strict';

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product = product * arr[i][j];
  }
 }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


2.6 
// flatten 2 dimension and 3 dimension array. And how can we flatten K dimensions(when we don't know the dimension of nested array)
'use strict';

const arr2 = [[1, 2], [3, 4], [5, 6]];
const arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8], [9,10], [11, 12]]];

console.log(arr2.flat())
///OR
function flatArray2(arr) {
  return arr2.flat();
}

console.log(arr3.flat(2))
//OR
function flatArray3(arr) {
  return arr3.flat(2);
}

console.log(flatArray2(arr2)); // results:  [1, 2, 3, 4, 5, 6]
console.log(flatArray3(arr3));// results: [ 1, 2, 3, 4, 5, 6, 7, 8 ]


2.7 
//Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

const x = 9;
 function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };
 function f2(val) {
  val.x = val.x + 1;
  return val;
 }

f2(y);
console.log(y);

//the reason they print different result it is becuase the first case has primitive data i.e number which is pass by value.
// so f1(x) and console.log(x) results in 10 and 9 respectively.

//While in second one is object, which are pass by reference.
// so f2(y) and console.log(y) has same result i.e. { x:10}.



//Step 3: Scope and Closure

'use strict';

function createBase(baseNumber) {
  return function (num) {
  return baseNumber + num;
} 
}

const addSix = createBase(6);
addSix(10);
addSix(21);


//BONUS Assignment:

'use strict';
 
let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']

let newArr = [...new Set(arr)];
console.log(newArr)

// RESULT: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//note: The Set object lets you store unique values of any type, whether primitive values or object references.




