import { readLines } from "../utils/readLines";

let enabled = true;

const multiplyLine = (line: string): number => {
    let total = 0;

    for (let i = 0; i < line.length; i++) {
        // if enabled is true, check to see if we are on a don't().  
        if (enabled && line.substring(i, i+7) === "don't()") {
            // set enabled to false and continue
            enabled = false;
            continue;
        }

        // if enabled is false, check to see if we are on a do()
        if (!enabled && line.substring(i,i+4) === "do()") {
            enabled = true;
            continue;
        }

        if (enabled && line.substring(i, i+4) === "mul(") {
            const possibleNumber1 = Number(line.substring(i+4,line.indexOf(',', i)))
            if (isNaN(possibleNumber1)) {
                continue;
            }
            const possibleNumber2 = Number(line.substring(line.indexOf(',', i)+1, line.indexOf(')', i)))
            if (isNaN(possibleNumber2)) {
                continue;
            }

            // we have two numbers
            // multiply them then add to total
            total += possibleNumber1 * possibleNumber2;
        }    
    }
    return total;
}

const testStr = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const testStr2 = "<mul(127,722)'how()#~%*^mul(337,149)!,!mul(11,87)'<who()* where(671,579)-mul(596,125)who(){@,,-;+from()how(148,934)mul(452,741) ~}mul(513,343)mul(45,508),where()what()mul(758,167)$@''where()!*from()?"
const testStrPart2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

let allTotal = 0;
function onReadLine(line: string) {
    allTotal += multiplyLine(line)
}
await readLines("input.txt", onReadLine)
console.log(allTotal);



