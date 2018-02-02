// Prompt the user to get the input data
let input = prompt("Enter the numbers");

// Split the input "string" into arrays
let arr = input.split(" ");

// Walker in the array
let i = 1;

// Determine the size of the array
let size = parseInt(arr[0]);

// Variables to determine profit
let accumulated_sum = 0;
let maximum_sum = 0;

// This function alters the global profit varialbes
// under certain condition. It will finally store
// the final required result in "accumulated_sum" variable
adjust_AccumulatedSum = (accum_sum, max_sum) => {

    if(accum_sum < max_sum)
        accumulated_sum = maximum_sum;

    if(max_sum < 0)
        maximum_sum = 0;

}

// Loop to determine the final required profit
while (i <= size){

    let num = parseInt(arr[i]);
    maximum_sum = maximum_sum + num;
    adjust_AccumulatedSum(accumulated_sum, maximum_sum);
    i++;

}

console.log("Maximum Possible Profit: ", accumulated_sum);


