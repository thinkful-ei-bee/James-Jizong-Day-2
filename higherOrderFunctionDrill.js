
function repeat(fn, n) {
    for (let i = 0 ; i < n; i++) {fn()};
}

function hello() {
    console.log('Hello world');
}

function goodbye(){ 
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr, fn){
	let newArray = [];
	for(let i = 0; i < arr.length;i++){
		if(fn(arr[i])){
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES









let turtleStep = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

turtleStep.filter(step => step[0]>=0 && step[1]>=0 )

turtleStep.map(step => step[0]+step[1])


//[ 0, 5, -4, -2, -2, 5 ]
turtleStep.map(step => step[0]+step[1]).forEach(step => step<0? console.log(
	step*-1):console.log(step)
);

