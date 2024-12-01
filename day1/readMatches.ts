export const readMatches = async (inputFile:string):Promise<number[][]> => {
    const arr1:number[] = [];
    const arr2:number[] = [];
    // read input.txt file
    // const inputFile = "testinput.txt";
    
    const input = Bun.file(inputFile);
    const stream = await input.stream();
    const decoder = new TextDecoder();

    let remainingData = "";
    for await (const chunk of stream) {
        const str = decoder.decode(chunk);
        remainingData += str;
        let lines = remainingData.split(/\r?\n/)
        while (lines.length > 1) {
            onLineRead(lines.shift()!);
        }
    }

    return [arr1,arr2];

    function onLineRead(line:string) {    
        const numberArr = line.split('   '); 
        arr1.push(parseInt(numberArr[0], 10))
        arr2.push(parseInt(numberArr[1], 10));
    }
}