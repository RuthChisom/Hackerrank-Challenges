// QUESTION SHEET
// Given a 6 X 6 2D Array, arr:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g
// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 X 6.
// Example
// arr = 
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:
// -63, -34, -9, 12, 
// -10,   0, 28, 23, 
// -27, -11, -2, 10, 
//   9,  17, 25, 18
// The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:
// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.
// Function Description
// Complete the function hourglassSum in the editor below.
// hourglassSum has the following parameter(s):
// int arr[6][6]: an array of integers
// Returns
// int: the maximum hourglass sum
// Input Format
// Each of the 6 lines of inputs  contains 6 space-separated integers a[i][j].
// Constraints
// -8 ≤ arr[i][j] ≤ 9
// 0 ≤ i,j ≤ 5
// Output Format
// Print the largest (maximum) hourglass sum found in arr.
// Sample Input
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output
// 19
// Explanation
//  contains the following hourglasses:
// 1 1 1  1 1 0  1 0 0  0 0 0
//   1      0      0      0 
// 1 1 1  1 1 0  1 0 0  0 0 0

// 0 1 0  1 0 0  0 0 0  0 0 0
//   1      1      0      0 
// 0 0 2  0 2 4  2 4 4  4 4 0

// 1 1 1  1 1 0  1 0 0  0 0 0
//   0      2      4      4 
// 0 0 0  0 0 2  0 2 0  2 0 0

// 0 0 2  0 2 4  2 4 4  4 4 0
//   0      0      2      0 
// 0 0 1  0 1 2  1 2 4  2 4 0
// The hourglass with the maximum sum (19) is:
// 2 4 4
//   2
// 1 2 4


// ANSWER SHEET
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let hourGlass = [];
    for(let i=0; i<arr.length-2;i++){ //loop over each array horizontally except the last two
        for(let j=0; j<arr.length-2;j++){ //loop over each array vertically except the last two
            let topRow = arr[i][j] + arr[i][j+1] + arr[i][j+2]
            let middleRow = arr[i+1][j+1];
            let bottomRow = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let sum = topRow + middleRow + bottomRow;
            hourGlass.push(sum);
        }
    }
    return Math.max(...hourGlass);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
