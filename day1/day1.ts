import { readMatches } from "./readMatches";

const calcTotalDistance = (list1: number[], list2: number[]): number => {
    // pass in two arrays of numbers
    // return the difference between the numbers in both lists as number

    let distance = 0;

    // sort both lists
    list1.sort((a,b) => a - b);    
    list2.sort((a,b) => a - b);    

    list1.forEach((num,i) => {
        const currDistance = Math.abs(num - list2[i])
        distance += currDistance;
    })
    
    return distance;
}

const calcSimilarityScore = (list1: number[], list2: number[]): number => {
    // input, two lists of numbers
    // output, a similarity score

    let similarityScore = 0;

    // create a counter Map for list2 that counts number of occurrences each number appears
    const list2Count = new Map<number,number>();

    list2.forEach(num => {
        if(list2Count.has(num)) {
            list2Count.set(num, list2Count.get(num)! + 1)
        } else {
            list2Count.set(num, 1);
        }
    })
    
    list1.forEach(num => {
        if (list2Count.has(num)) {
            similarityScore += (num * list2Count.get(num)!)
        }
    })

    return similarityScore;
}

const matches = await readMatches("testinput.txt");

console.log('Total Distance: ', calcTotalDistance(matches[0], matches[1]));
console.log('Similarity Score: ', calcSimilarityScore(matches[0], matches[1]));