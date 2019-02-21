// 2019 Thinkful cohort 29, Day 2, Higher Order Function Drills
// James & Jizong 
'use strict';

// Task 2 repeat 
function repeat(fn, n) {
  for (let i = 0 ; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye(){ 
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

// Task 2 Filter 
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

// testing part 
// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames);


// hazard warning counter
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function (location){
    warningCounter+=1;
    let times = '';
    if(warningCounter>=2 || warningCounter===0)
    times = 'time(s)';
    else times = 'time';
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`)
    // eslint-disable-next-line no-console
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`); 
  };
}

// rocksWarning is pointed to the return of the 
// rocksWarning(),and its return is a function. 
// so, rockWarning is a secondary function
const rocksWarning = hazardWarningCreator('Rocks on the Road');

const iceWarning = hazardWarningCreator('Heavy ice is on the Road');

const snowWarning = hazardWarningCreator('Snow storm is hitting');

iceWarning('Jackson,MS')
rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
snowWarning('Center City, Pa')


// Turtle Steps 
let turtleStep = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleStep.filter(step => step[0]>=0 && step[1]>=0 );

turtleStep.map(step => step[0]+step[1]);


//[ 0, 5, -4, -2, -2, 5 ]
turtleStep.map(step => step[0]+step[1]).forEach(step => step<0? console.log(
  step*-1):console.log(step)
);


let encodedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

let wordList = encodedMessage.split(' ');

wordList.unshift(' ');
console.log(wordList.reduce((acc,word)=>{
  console.log('acc',acc,'word',word);
  console.log('\nif 3 letters:',word.length===3);
  console.log('\nlast letters cap',word[word.length-1].toUpperCase());
  (word.length===3) ? acc+=' ':acc+=word[word.length-1].toUpperCase();
  return (word.length===3) ? acc+=' ':acc+=word[word.length-1].toUpperCase()
}
));

