const shopping = ['bread', 'milk', 'cheese', 'yogurt', 'kombucha'];

console.log(shopping);

const random = [1, 'bacon', 2, 'trees', '@'];
const fibSeq = [1, 1, 2, 3, 5, 8, 13];

console.log(random.length); //length method returns length array "random"
randomLength = random.length;
console.log(randomLength);

console.log(random);
random[3] = 'awwwwman!!:('; //inserts string as an array item at specified array index, in this case it would be the thirdeth (4th) item in array "random".
console.log(random);
random.push('wait it okay!'); //adds string to the end of "random"
console.log(random);

const MDA = [7, 8, 9, 10, 11, '@', '!', [[.1, .2,.3], 2, 3]]; //Multi Dimensional Array
console.log(MDA.length); //returns length of array "MDA" using length function
console.log(MDA[7][0][2]); //returns

console.log(MDA.indexOf('@'));



const shiftingTest = [1, 2, 3 ,4 ,5,'test', 'test1'];
shiftingTest.unshift('Hi Nick!'); //using the unshift method we add array string item "Hi Nick!" to the beginning of array "shiftTest"
console.log(shiftingTest);

const firstShift = shiftingTest.shift(); //sets variable "firstShift" to use "shift" method to remove first array item and return the removed value.
console.log(firstShift);


const arrayX = [1, 2, 3, 4, 5, 6, 'first pie']; //sets array with two different types. Numbers a string.
const arrayPop = arrayX.pop(); //sets variable "arrayPop" to pop the last item out of "arrayX and return that value"
console.log(arrayPop);
const arrayPush = arrayX.push('then waffles');//sets variable "arrayPush" to push string "then waffles" to end of array "arrayX" and return the new array length.
console.log(arrayPush); // returns array length
console.log(arrayX); //returns newly pushed string