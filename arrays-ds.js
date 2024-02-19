// QUESTION SHEET
// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of size N, each memory location has some unique index, i (where 0 ≤ i < N), that can be referenced as A[i] or Ai.
// Reverse an array of integers.
// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.
// Example 
// A = [1,2,3]
// Return [3,2,1].
// Function Description
// Complete the function reverseArray in the editor below.
// reverseArray has the following parameter(s):
// int A[n]: the array to reverse
// Returns
// int[n]: the reversed array
// Input Format
// The first line contains an integer, N, the number of integers in A. 
// The second line contains N space-separated integers that make up A.
// Constraints
// 1 ≤ N ≤ 10^3
// 1 ≤ A[i] ≤ 10^4, where A[i] is the ith integer in A
// Sample Input 1
// 4
// 1 4 3 2
// Sample Output 1
// 2 3 4 1


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
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here

    let newArray = [];
    let j=1;
    a.forEach(item => {
        newArray[a.length-j] = item;
        j++;
    })
    return newArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
