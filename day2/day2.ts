




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
        if (isSafe)
            safeCount++;
    }
    return safeCount;
       
    // increment safe report counter if report is safe

    // return safe report counter
}

const reports: number[][] = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
];

//console.log(isReportSafe([7,6,4,2,1]))
//console.log(isReportSafe([1, 3, 2, 4, 5]))

console.log(howManySafeReports(reports))

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
            // loop through each num in report
            // if no prev number, set prev to current number and continue

            // if prev number, check the following
                // if row so far is increasing or decreasing and if this matches
                    // if not set, compare to prev and set
                // if Math.abs(prev - curr) is > 0 and < 4
                // If no to either of the above, row is not safe, return false
}
