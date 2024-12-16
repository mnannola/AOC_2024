import { readLines } from "../utils/readLines";

const multiplyLines = (line: string): number => {
    let total = 0;

    // iterate through each char in line
    let i = line.indexOf("mul(");
    while (i < line.length) {            
            if (i === -1) {
                break;
            }
            const possibleNumber1 = Number(line.substring(i+4,line.indexOf(',', i)))
            if (isNaN(possibleNumber1)) {
                i = line.indexOf("mul(", i+1)
                continue;
            }
            const possibleNumber2 = Number(line.substring(line.indexOf(',', i)+1, line.indexOf(')', i)))
            if (isNaN(possibleNumber2)) {
                i = line.indexOf("mul(", i+1)
                continue;
            }

            // we have two numbers
            // multiply them then add to total
            total += possibleNumber1 * possibleNumber2;
            i = line.indexOf("mul(", i+1)
    }
    return total;
}

const testStr = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const testStr2 = "<mul(127,722)'how()#~%*^mul(337,149)!,!mul(11,87)'<who()* where(671,579)-mul(596,125)who(){@,,-;+from()how(148,934)mul(452,741) ~}mul(513,343)mul(45,508),where()what()mul(758,167)$@''where()!*from()?"

let allTotal = 0;
function onReadLine(line: string) {
    allTotal += multiplyLines(line)
}
await readLines("input.txt", onReadLine)

const testStr3 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

console.log(allTotal);