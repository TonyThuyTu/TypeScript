function findPairsWithTargetSum(arr, target) {
    var result = [];
    var seen = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        var complement = target - num;
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        seen.add(num);
    }
    return result;
}
// Test example
var input2 = [8, 7, 2, 5, 3, 1];
var target = 10;
console.log(findPairsWithTargetSum(input2, target));
