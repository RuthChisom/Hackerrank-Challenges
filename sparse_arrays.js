// QUESTION SHEET
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Example
//  stringList = [‘ab‘,‘ ab‘,abc‘]
//  queries = [‘ab‘,‘ abc‘,‘ bc‘]
// There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2,1,0].
// Function Description
// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in stringList.
// matchingStrings has the following parameters:
// string stringList[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns
// int[q]: an array of results for each query
// Input Format
// The first line contains and integer n, the size of stringList[]. 
// Each of the next n lines contains a string stringList[i]. 
// The next line contains q, the size of queries[]. 
// Each of the next q lines contains a string queries[i].
// Constraints
// 1 ≤ n ≤ 1000
// 1 ≤ q ≤ 1000
// 1 ≤ |stringList[i]|, |queries[i]| ≤ 20.
// SAMPLE INPUT 1
// Array: stringList
// 4
// aba
// baba
// aba
// xzxb
// Array: queries
// 3
// aba
// xzxb
// ab
// SAMPLE OUTPUT 1
// 2
// 1
// 0
// Explanation 1
// Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all
// SAMPLE INPUT 2
// Array: stringList
// 3
// def
// de
// fgh
// Array: queries
// 3
// de
// lmn
// fgh
// SAMPLE OUTPUT 2
// 1
// 0
// 1
// SAMPLE INPUT 3
// Array: stringList
// 13
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// Array: queries
// 5
// abcde
// sdaklfj
// asdjf
// na
// basdn
// SAMPLE OUTPUT 3
// 1
// 3
// 4
// 3
// 2


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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringListCount = parseInt(readLine().trim(), 10);

    let stringList = [];

    for (let i = 0; i < stringListCount; i++) {
        const stringListItem = readLine();
        stringList.push(stringListItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(stringList, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
