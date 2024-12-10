import { readLines } from "./readMatches";

const calcTotalDistance = (list1: number[], list2: number[]): number => {
    // pass in two same length arrays of numbers 
    // return the difference between the numbers in both lists as number
    const t0 = performance.now();

    // sort both lists
    list1.sort((a,b) => a - b);    
    list2.sort((a,b) => a - b);        

    const distance = list1.reduce((acc, cur, i) => {
        return acc += Math.abs(cur - list2[i])
    }, 0)
    
    console.log('calcTotalDistance time: ', performance.now() - t0);
    return distance;
}

const calcSimilarityScore = (list1: number[], list2: number[]): number => {
    // input, two lists of numbers
    // output, a similarity score
    const t0 = performance.now();
    // let similarityScore = 0;

    // create a counter Map for list2 that counts number of occurrences each number appears
    const list2Count = new Map<number,number>();

    list2.forEach(num => {
        if(list2Count.has(num)) {
            list2Count.set(num, list2Count.get(num)! + 1)
        } else {
            list2Count.set(num, 1);
        }
    });
        
    const similarityScore = list1.reduce((acc, cur) => {
        if (list2Count.has(cur))
            acc += (cur * list2Count.get(cur)!)
        return acc
    });

    console.log('calcSimilarityScore time', performance.now() - t0);
    return similarityScore;
}
const arr1:number[] = [];
const arr2:number[] = [];

function onLineRead(line:string) {    
    const numberArr = line.split('   '); 
    arr1.push(parseInt(numberArr[0], 10))
    arr2.push(parseInt(numberArr[1], 10));
}
await readLines("testinput.txt", onLineRead );

console.log('Total Distance: ', calcTotalDistance(arr1, arr2));
console.log('Similarity Score: ', calcSimilarityScore(arr1, arr2));
