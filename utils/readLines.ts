export const readLines = async (inputFile:string, readLine: (line: string) => void):Promise<any> => {
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
            readLine(lines.shift()!)
        }
    }        
}