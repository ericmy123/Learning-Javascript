const shopping = ['bread', 'milk', 'cheese', 'yogurt', 'kombucha'];
console.log(shopping);


//the length property returns the number of elements in an array.
const random = [1, 'bacon', 2, 'trees', '@'];
console.log(random.length);
const randomLength = random.length;
console.log(randomLength);

//the push() method adds one or more elements to the end of an array and returns the new length of the array PUSH MODIFIES ARRAY INSTEAD OF CREATING NEW ONE.
console.log(random);
random[3] = 'awwwwman!!:('; //what is this?
console.log(random);
random.push('wait it okay!');
console.log(random);

const mdA = [7, 8, 9, 10, 11, '@', '!', [[.1, .2,.3], 2, 3]]; 
console.log(mdA.length);
console.log(mdA[7][0][2])
console.log(mdA.indexOf('@'));
const mdaIndexOf = mdA.indexOf('meep') //returns -1 because there is no string 'meep' in array mdA.
//the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.



const shiftingTest = [1, 2, 3 ,4 ,5,'test', 'test1'];
shiftingTest.unshift('Hi Nick!');
console.log(shiftingTest);

const firstShift = shiftingTest.shift();
console.log(firstShift);

//The unshift() method adds one or more elements to the beginning of an array and RETURNS NEW LENGTH OF ARRAY.

//The shift() method removes the first element from an array and returns that removed element. THIS METHOD CHANGES THE LENGTH OF THE ARRAY.

//The pop() method removes the last element from an array and returns that element. THIS METHOD CHANGES THE LENGTH OF THE ARRAY.

const arrayX = [1, 2, 3, 4, 5, 6, 'first pie'];
console.log(arrayX);
const arrayPop = arrayX.pop(); 
console.log(arrayPop);
const arrayPush = arrayX.push('then waffles');
//console.log(arrayPush);
console.log(arrayX);
//add "first pie" back into array before "then waffles" and after 6.


const fibSeq = [1, 1, 2, 3, 5, 8, 13];
console.log(fibSeq);
//The map() method CREATES A NEW ARRAY populated with the results of calling a provided function on every element in the calling array.

const doublefibSeq = fibSeq.map(x => x * 2); //LETS TALK ABOUT ARROW FUNCTIONS! 
console.log(doublefibSeq);


const pets = [
    {
        name: 'Little Girl',
        classification: 'cat',
        gender: 'female',
        eyeColor: 'green',
        weight: 8, //weight in pounds
        hunter: true,
        owner: 'Jamie',
    },
    {
        name: 'Milo',
        classification: 'cat',
        gender: 'male',
        eyeColor: 'green',
        weight: 8.5,
        hunter: true,
        owner: 'Tyler',
    },
    {
        name: 'Whiskey',
        classification: 'dog',
        gender: 'female',
        eyeColor: 'brown',
        weight: 20,
        hunter: false,
        owner: 'Matt',
    },
    {
        name: 'Moonshine',
        classification: 'dog',
        gender: 'female',
        eyeColor: 'brown',
        weight: 60,
        hunter: false,
        owner: 'Dana',
    },
    {
        name: 'Rosie',
        classification: 'dog',
        gender: 'female',
        eyeColor: 'brown',
        weight: 75,
        hunter: false,
        owner: 'Jimmy',
    },
    {
        name: 'Puppy',
        classification: 'dog',
        gender: 'male',
        eyeColor: 'brown',
        weight: 30,
        hunter: false,
        owner: 'Jacquie',
    },
    {
        name: 'Rosie',
        classification: 'dog',
        gender: 'female',
        eyeColor: 'brown',
        weight: 50,
        hunter: false,
        owner: 'Sue',
    },
];


//the filter() method creates a SHALLOW COPY of a portion of a given array, filtered down to just the elements from the given array that pass the conditions provided in function.

const heavyPets = pets.filter(pet => {
    return pet.weight >= 50;
})
console.log(heavyPets);

//The sort() method sorts the elements of an array in place and returns the reference to THE SAME ARRAY, now sorted.

const byWeight = pets.sort((a,b) =>{ // \...look into.../ ASK ABOUT SORT METHOD ???????
    return a.pet - b.pet;
})
console.log(byWeight);


function notEqual() {
    console.log('These numbers are not equal')
}

function equal() {
    console.log('These numbers are equal')
}
const x = 32;
const y = 45;

if (x === y) {
    equal();
}
else {
    notEqual();
}

const bestFood = 'Indian';

switch(bestFood){
    case 'Mexican':
        console.log('Great, but not the best');
        break;
    case 'Hawaiian':
        console.log('Good, but not the best');
        break;
    case 'Thai':
        console.log('Second best, but not the best');
        break;
    case 'Indian':
        console.log('Yes! Indian food is THE best!');
        break;
    default:
        console.log("You've picked the best food, Indian!");
}

const nullishTest = null ?? 'test';
console.log(nullishTest);

const orTest = 0 || 'test1';
console.log(orTest);


//for (initialization; condition; afterthought)
let forLoopTest = '';
for (let i = 0; i < 10; i++) {
    forLoopTest = forLoopTest + i;
    console.log(forLoopTest);
}
console.log(forLoopTest);


let n = 0;
while (n < 3) {
    n++;
}
console.log(n);

let m = 3;
while (m > 0) {
    m--;
    console.log(m);
}

