// QUESTION SHEET
// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer, and initialize it to 0.
// There are 2 types of queries, given as an array of strings for you to parse:
// 1. Query: 1 x y
//  1. Let idx = ((x ⊕ lastAnswer) % n).
//  2. Append the integer y to arr[idx].
// 2. Query: 2 x y
//  1. Let idx = ((x ⊕ lastAnswer) % n).
//  2. Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
//  3. Store the new value of lastAnswer to an answers array.
// Note: ⊕ is the bitwise XOR operation, which corresponds to the ^ operator in most languages. 
// Learn more about it on https://en.wikipedia.org/wiki/Exclusive_or (With two inputs, XOR is true if and only if the inputs differ (one is true, one is false). With multiple inputs, XOR is true if and only if the number of true inputs is odd)
// % is the modulo operator. 
// Finally, size(arr[idx]) is the number of elements in arr[idx]
// Function Description
// Complete the dynamicArray function below.
// dynamicArray has the following parameters: 
// - int n: the number of empty arrays to initialize in arr 
// - string queries[q]: query strings that contain 3 space-separated integers
// Returns
// int[]: the results of each type 2 query in the order they are presented
// Input Format
// The first line contains two space-separated integers, n, the size of arr to create, and q, the number of queries, respectively. 
// Each of the q subsequent lines contains a query string, queries[i].
// Constraints
// - 1 ≤ n,q ≤ 10^5
// - 0 ≤ x,y ≤ 10^9
// It is guaranteed that query type 2 will never query an empty array or index.
// Sample Input
// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output
// 7
// 3
// Explanation
// Initial Values: 
// n = 2
// lastAnswer = 0
//  arr[0] = [5] 
//  arr[1]= []
// Query 0: Append 5 to arr[((0 ⊕ 0) % 2)] = arr[0]. 
// lastAnswer = 0
// arr[0] = [5] 
// arr[1] = []
// Query 1: Append 7 to arr[((1 ⊕ 0) % 2)] = arr[1]. 
// arr[0] = [5] 
// arr[1] = [7]
// Query 2: Append 3 to arr[((0 ⊕ 0) % 2)] = arr[0]. 
//  lastAnswer = 0
// arr[0] = [5, 3] 
// arr[1] = [7]
// Query 3: Assign the value at index 0 of arr[((1 ⊕ 0) % 2)] = arr[1] to lastAnswer, print lastAnswer. 
// lastAnswer = 7
// arr[0] = [5, 3] 
// arr[1] = [7]
// 7
// Query 4: Assign the value at index 1 of arr[((1 ⊕ 7) % 2)] = arr[0] to lastAnswer, print lastAnswer. 
// lastAnswer = 3
// arr[0] = [5, 3] 
// arr[1] = [7]
// 3


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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let arr = [];
    let lastAnswer = 0;
    let lastAnswerArray = []
    for(let i=1;i<=n;i++){
        arr.push([]);
    }
    for(let j=0; j<queries.length; j++){
        let idx = ((queries[j][1] ^ lastAnswer) % n);
        if(queries[j][0]==1){
            arr[idx].push(queries[j][2])
        }
        else if(queries[j][0]==2){
            lastAnswer = arr[idx][queries[j][2] % arr[idx].length];
            lastAnswerArray.push(lastAnswer);
        }
    }
    return lastAnswerArray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
