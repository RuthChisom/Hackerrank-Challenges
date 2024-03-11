// QUESTION SHEET
// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.
// Example 
// d = 2
// arr = [1,2,3,4,5]
// After 2 rotations, arr' = [3,4,5,1,2].
// Function Description
// Complete the rotateLeft function in the editor below.
// rotateLeft has the following parameters:
// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns
// int[n]: the rotated array
// Input Format
// The first line contains two space-separated integers that denote n, the number of integers, and d, the number of left rotations to perform. 
// The second line contains n space-separated integers that describe arr[].
// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ d ≤ n
// 1 ≤ a[i] ≤ 10^6
// Sample Input
// 5 4
// 1 2 3 4 5
// Sample Output
// 5 1 2 3 4
// Explanation
// To perform d = 4 left rotations, the array undergoes the following sequence of changes:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]


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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    let counter=1;
    while (counter<=d){
            let firstElement = arr[0]; // get the first element
            arr.shift(); //remove the first element
            arr.push(firstElement); //add the first element as the last
        counter++;
    }
    return arr;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
