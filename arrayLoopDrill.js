// James and David Drilling exercise 02/20/2019

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

let numbers = [2, 4, 8, 16, 32];
console.log('max number is:',max(numbers), '\nmin number is:',min(numbers));

