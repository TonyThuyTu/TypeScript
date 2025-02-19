function findSubarraysWithZeroSum(arr: number[]): number[][] {
    const result: number[][] = [];
    
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        const subarray: number[] = [];
        
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            subarray.push(arr[j]);
            
            if (sum === 0) {
                result.push([...subarray]);
            }
        }
    }
    
    return result;
}

// Test example
const input1 = [3, 4, -7, 3, 1, 3, -2, -1];
console.log(findSubarraysWithZeroSum(input1));
