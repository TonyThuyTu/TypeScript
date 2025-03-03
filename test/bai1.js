// // Cho 1 mảng nhị phân (chỉ gồm các phần tử 0 và 1). Tìm vị trị của phần tử 0 cần thay thế 
// để có được chuỗi các phần tử 1 dài nhất có thể.
// Ví dụ:
// Mảng n: { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }
// Cần thay thế 0 ở vị trí index = 7 ta có 
// { 0, 0, 1, 0, 1, 1, 1, 1, 1, 1 } 
// => có chuổi 6 phần tử 1 liên tiếp.
function replaceZeroForMaxOnes(arr) {
    var maxLen = 0;
    var bestIndex = -1;
    var left = 0, zeroCount = 0;
    // Tìm vị trí tốt nhất để thay đổi 0 thành 1
    for (var right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            zeroCount++;
        }
        // Nếu có nhiều hơn 1 số 0 trong cửa sổ, ta dịch left sang phải
        while (zeroCount > 1) {
            if (arr[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        // Kiểm tra xem đây có phải dãy 1 dài nhất không
        var currentLen = right - left + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
            bestIndex = left; // Vị trí 0 tốt nhất nằm trong khoảng [left, right]
        }
    }
    // Nếu tìm thấy vị trí cần thay, thay thế nó trong mảng
    if (bestIndex !== -1) {
        arr[bestIndex] = 1;
    }
    return arr;
}
// Test case
var n = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(replaceZeroForMaxOnes(n));
