function findPairsWithTargetSum(arr: number[], target: number): [number, number][] {
    const result: [number, number][] = [];
    const seen = new Set<number>();
    
    for (const num of arr) {
        const complement = target - num;
        
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        
        seen.add(num);
    }
    
    return result;
}

// Test example
const input2 = [8, 7, 2, 5, 3, 1];
const target = 10;
console.log(findPairsWithTargetSum(input2, target));
