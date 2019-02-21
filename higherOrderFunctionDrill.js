
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

function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function (location) {
		warningCounter ++;
	}
	console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
	console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Mud on the Road');
const fireWarning = hazardWarningCreator('Fire on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
floodWarning('Mullholland Highway and Encinal Canyon Rd');
fireWarning('De Soto Ave and Topanga Cayon Blvd');

///what action do I need to take from here?


let turtleStep = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

turtleStep.filter(step => step[0]>=0 && step[1]>=0 )

turtleStep.map(step => step[0]+step[1])


//[ 0, 5, -4, -2, -2, 5 ]
turtleStep.map(step => step[0]+step[1]).forEach(step => step<0? console.log(
	step*-1):console.log(step)
);


//let encodedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

//let wordList = encodedMessage.split(' ');

//console.log(wordList.reduce((acc,word)=>
// ternary operator: if word length===3 add a space 
// to acc else capitalize the last char then add to acc
// word.slice(0,word.length-1) every char in a word 
// except the last char concat the last char in uppercase
//	{console.log('acc',acc,'word',word);
//	console.log('\nif 3 letters:',word.length===3);
//	console.log('\nlast letters cap',word[word.length-1].toUpperCase());
//	(word.length===3) ? acc+=" ":acc+=word[word.length-1].toUpperCase()}
//))

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));

function decode(sentence) {
    let words = sentence.split(' ');
    let newWords = words.reduce(function(acc, word) {
    if (word.length === 3) {
        acc += ' ';
        console.log(acc);
    } else {
        acc += word[word.length - 1].toUpperCase();
        console.log(acc);
    }
    return acc;
}, '')}

// I can't figure this one out. Help?