/*
    1. Write an expression which selects every <p> element in the document (write in all ways you know)
*/
let ps = document.querySelectorAll('p');
ps = document.getElementsByName('p');
ps = document.getElementsByTagName('p');
/*
    2. Write an expression which selects every element with the wrapper class in the document (write in all ways you know)
*/
let wrappers = document.querySelectorAll('.wrapper');
wrappers = document.getElementsByClassName('wrapper');
/*
    3. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which only contains numbers can divide by two (with built in array methods)
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrDivideByTwo = arr.filter(num => num % 2 == 0);
/*
    4. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which is multiplied versions of every element in the array(with built in array methods)
*/
const arrMultiplied = arr.map(num => num * 2);
/*
    5. Write a custom method which accepts an array and returns an array with all the values duplicated
    input: [1,2,3,4,5]
    expected output: [1,2,3,4,5,1,2,3,4,5]
*/
function duply(arr) {
    arr.forEach(num => {
        arr.push(num);
    });
    return arr;
}

/*
    6. Write a custom method with name 'multiply' which can be invoked like the example below:
    multiply(2)(3)(5)
    expected output: 30
*/
function multiply(num) {
    let mult = 1;
    return (x) => {
        (y) => {
            (z) => { return mult *= x * y * z }
        }
    };
}
console.log(multiply(2)(3)(5));

/*
    7. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array only contains numbers greater than 5
*/
arr.every(num => num > 5);
/*
    8. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array at least contains one element which divides by 2
*/
arr.some(num => num % 2 == 0);
/*
    9.  What will be the output of the following code?
        var Employee = {
            company: 'xyz'
        }
        var emp1 = Object.create(Employee);
        delete emp1.company
        console.log(emp1.company);
*/

// xyz

/*
    10. I wrote a function, how can i know how many arguments provided to my function
*/
function arg(num) {
    num;
    return arguments.length;
}
/*
    11. You are given an array like [1,2,3,4], how can you empty array? (write in )
    input: [1, 2, 3, 4]
    output: []
*/

function empty(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        arr.pop();
    }
    return arr;
}