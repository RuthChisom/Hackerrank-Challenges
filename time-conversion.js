// QUESTION SHEET
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// s = ‘12:01:00PM‘
// Return '12:01:00'.
// s = ‘12:01:00AM‘
// Return '00:01:00'.
// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in 12 hour format
// Returns
// string: the time in 24 hour format
// Input Format
// A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
// Constraints
// All input times are valid
// Sample Input 0
// 07:05:45PM
// Sample Output 0
// 19:05:45


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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    //split time to get the last part
    const timeArray = s.split(":")
    const lastTimePart = timeArray[timeArray.length-1];
    //if AM, return same time, but remove AM
    if(lastTimePart.endsWith('AM')){
        //if 12AM, return 00 as first element
        if(timeArray[0]==12){ 
            timeArray[0] = '00';
        }
        return `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`.replace('AM','');
    }
    // iF PM
    else{
        // If not 12PM, add 12 to first element
        if(timeArray[0]!=12){
            timeArray[0] = parseInt(timeArray[0]) + 12;
        }
        return `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`.replace('PM','');
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
