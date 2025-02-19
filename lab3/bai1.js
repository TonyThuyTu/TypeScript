var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function DataInput(input) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
        var sum = 0;
        var subarray = [];
        for (var j = i; j < input.length; j++) {
            sum += input[j];
            subarray.push(input[j]);
            if (sum === 0) {
                result.push(__spreadArray([], subarray, true));
            }
        }
    }
    return result;
}
var input1 = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
console.log(DataInput(input1));
