// James and David Drilling exercise 02/20/2019
'use strict';
function max(numbers) {
    let counter = 0;
    let max = 0;
    while(counter < numbers.length) {
        if(max < numbers[counter]){
            max = numbers[counter];
        }
        counter += 1;
    }
    return max;
}
 
// added a little correction here -David 
function min(numbers){
	let counter = 0;
	let min = numbers[0];
	while(counter < numbers.length){
		if(numbers[counter]< min){
			min = numbers[counter]}

			counter += 1;
		}
		return min;
	}

let numbers = [1,2,3,4,5];
console.log('max number is:',max(numbers), '\nmin number is:',min(numbers));


function average(numbers) {
    // your code goes here
    let result = 0;
  
    numbers.forEach( number => result += number);
    return result/numbers.length;
  }
  

console.log('The average is:',average(numbers));
  

function repeat(fn, n) {
    for (let i = 0 ; i < n; i++) {fn};
}

function hello() {
    console.log('Hello world');
}

function goodbye(){ 
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);