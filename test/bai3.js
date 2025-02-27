// // Cho 1 mảng có chứa các phần tử trùng lặp, hãy tìm phần tử chiếm đa số (majority element). 
// Phần tử này phải có số lần xuất hiện > n/2 với n là độ dài của mảng.
// Ví dụ:
// {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}
// => 2 là majority element.
function FindMajorityElement(arr) {
    var countMajorityElement = {};
    var n = arr.length;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        countMajorityElement[num] = (countMajorityElement[num] || 0) + 1;
        if (countMajorityElement[num] > n / 2)
            return num;
    }
    return null;
}
var arr = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
console.log(FindMajorityElement(arr));
