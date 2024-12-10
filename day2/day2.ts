import { readLines } from "../utils/readLines";

const howManySafeReports = (reports:number[][]): number => {
    // calc how many safe reports
    // input: 2d array of levels in this shape:
    // const reports: number[][] = [
    //     [7, 6, 4, 2, 1],
    //     [1, 2, 7, 8, 9],
    //     [9, 7, 6, 2, 1],
    //     [1, 3, 2, 4, 5],
    //     [8, 6, 4, 4, 1],
    //     [1, 3, 6, 7, 9]
    // ];

    // output - how many reports are safe
    /* a safe report has to pass these rules:
    1. The levels in the report are either all increasing or all decreasing.
    2. Any two adjacent levels differ by at least one and at most three.
    */

    // loop through each row (report) of reports
    let safeCount = 0;
    for (const report of reports) {        
        const isSafe = isReportSafe(report);        
        if (isSafe){            
            safeCount++;
        }
    }
    return safeCount;
       
    // increment safe report counter if report is safe

    // return safe report counter
}

// const reports: number[][] = [
//     [7, 6, 4, 2, 1],
//     [1, 2, 7, 8, 9],
//     [9, 7, 6, 2, 1],
//     [1, 3, 2, 4, 5],
//     [8, 6, 4, 4, 1],
//     [1, 3, 6, 7, 9]
// ];

const reports: number[][] = [];
function onReadLine(line: string) {    
    const lineNumbers: number[] = [];
    // split line on space
    const splitLine = line.split(' ');
    // append each number in line to reports
    splitLine.forEach(number => lineNumbers.push(parseInt(number, 10)))
    // add lineNumbers to reports
    reports.push(lineNumbers);
}
const fileName = "input.txt";
// const fileName = "testinput.txt";

await readLines(fileName, onReadLine)

console.log(howManySafeReports(reports))
// console.log(isReportSafe([4,4,4,4,5]))
function isReportSafe(report: number[]) {
     // test to see if the report is safe
     let prev;
     let isIncreasing;
     for (let i = 0; i < report.length; i++) {
        const curr = report[i]        
        if (prev === undefined) {
            prev = curr;                     
            continue;
        }
        const diff = curr - prev;        
        if (isIncreasing === undefined)
        {
            isIncreasing = diff > 0;
        }        
        
        const absDiff = Math.abs(diff);
        if (absDiff < 1 || absDiff > 3){
            return false;
        }

        // Check if row increasing or decreasing is different.  if so, return false
        if (isIncreasing && diff < 0) 
            return false

        if (isIncreasing === false && diff > 0)
            return false

        prev = curr;
     }
     return true;
}
