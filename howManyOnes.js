let countOfOnes = 0;
let arrayOfOnes = [];

const range = (start, end) => {
    for (let i = start; i < end; i++) {
        arrayOfOnes.push(i);
    }
}


let startNum = 1; //need to let user input the data from html form
let endNum = 100;
range(startNum, endNum);

//console.log(arrayOfOnes); //this n eeds to be after the function call

// let stringOfOnes = arrayOfOnes.toString();
// console.log(stringOfOnes);

let filteredArray = arrayOfOnes.filter(ones => ones === 1);
console.log(filteredArray);