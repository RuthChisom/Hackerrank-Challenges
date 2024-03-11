// QUESTION SHEET
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// Example
// candles = [4,4,1,3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.
// Function Description
// Complete the function birthdayCakeCandles in the editor below.
// birthdayCakeCandles has the following parameter(s):
// int candles[n]: the candle heights
// Returns
// int: the number of candles that are tallest
// Input Format
// The first line contains a single integer, n, the size of candles[]. 
// The second line contains n space-separated integers, where each integer i describes the height of candles[i].
// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ candles[i] ≤ 10^7
// Sample Input 0
// 4
// 3 2 1 3
// Sample Output 0
// 2
// Explanation 0
// Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.


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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let counter = 0;
    let tallestCandle = Math.max(...candles); //find the max height
    // find how many times it appears
    candles.forEach(item=>{
        if(item==tallestCandle) counter++;
    })
    return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
