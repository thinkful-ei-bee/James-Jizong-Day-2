
function max(numbers) {
    let counter = 0;
    let max = 0;
    while(counter < numbers.length) {
        if(max < numbers[counter]){
            max = numbers[counter];
        }
    }
    return max;
}
 
function min(numbers) {
    let counter = 0;
    let min = 0;
    while(counter < numbers.length) {
        if(min > numbers[counter]){
            min = numbers[counter];
        }
    }
    return min;
}