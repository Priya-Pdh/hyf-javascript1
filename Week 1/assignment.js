1. //Languages I know
console.log("नमस्कार संसार") //Nepali
console.log("Hello World")//English
console.log("नमस्ते दुनिया")//Hindi
console.log("Hej världen")//Swedish

2.
//Code with error: console.log('I'm awesome');

//Solution:
console.log("I'm awesome");

3.//Declare a variable x and initialize it with an integer

let x
console.log("my age is "+x);
console.log("myAge")

x=27
console.log("my age is "+x);
console.log(x)

Result:
'my age is undefined'
'myAge'

27
'my age is 27'
27

4. //Declare a variable y and assign a string to it

console.log("favoriteFood");
console.log("pizza")

let y="Rose"

console.log("favoriteFlower");
console.log(y) 

5./* Round the number 7.25, to the nearest integer (i.e., whole number) */

let z=7.25
console.log(z)

let a= z
console.log(Math.round(z))


let highestNum; /* compare the two values and store the highest of the two in a new variable */
if (z > a){
  (highestNum=z);
} else {
  (highestNum=a);
}
console.log (highestNum)


6. //using INDEX[0,1,2,3,4]

const favoriteColors =[]
console.log("my favorite colors")
console.log("blue", "pink", "white")


const favoriteAnimals= ["rabbit", "horse", "deer", "dolphin"]
console.log(favoriteAnimals)


favoriteAnimals [4] ="baby pig"
console.log(favoriteAnimals)

// using PUSH() Function

const favoriteColors = []
console.log("my favorite colors")
console.log("blue", "pink", "white")


const favoriteAnimals = ["rabbit", "horse", "deer", "dolphin"]
console.log(favoriteAnimals)

favoriteAnimals.push("baby pig") 
console.log(favoriteAnimals)

7. //stringLength

let myString = "this is a test"

console.log(myString)

console.log(myString.length)

8. // typeof

let a = 555;
let b = "Hello world";
let c = {name: "Priya", age:"27"};
let d = 1234;

console.log("value of a is:" +a)
console.log("value of b is:" +b)
console.log("value of c is:" +c)
console.log("value of d is:" +d
)
console.log("type of a is number")
console.log("type of b is string")
console.log("type of c is object")
console.log("type of d is number")

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

if (typeof a=== typeof b) {
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")
}
if (typeof a=== typeof c){
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")}

if (typeof a=== typeof d){
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")}
  

if (typeof b=== typeof c){
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")}

if (typeof b=== typeof d){
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")}

if (typeof c=== typeof d){
    console.log("SAME TYPE");
    }
else {console.log("NOT SAME TYPE")}

9. 
let x=7
x=x%3
console.log ("'%' is called remainder or also know as modulo")
console.log ("'7%3',it returns 1, as 3 goes into 7 twice, leaving 1 left over.")
console.log("the result is the remainder after division of 7 with 3.")


10.1 
let multipleArray = [1,"water", 200 , "sun", "earth", 100, "moon"]
console.log(multipleArray) 

10.2 
let x= 6/0
let y= 10/0

if (x===y) {
  console.log("Infinites can be compared")
} else {
  console.log("Infinites cannot be compared")
}
10.3
console.log ("the value of both x and y cannot be divided by 0, therefore value of both becomes equal")
