// Tìm sub-array có độ dài lớn nhất với tổng các phần tử cho trước.
// Ví dụ:
// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8  
// sub-array có tổng = 8 bao gồm:
//  { -5, 5, 3, 5 }{ 3, 5 }{ 5, 3 } 
// => sub-array dài nhất là: { -5, 5, 3, 5 } có length = 4
function longestSubArrayWithSum(nums, target) {
    var sumIndex = {}; // Dùng object thay Map
    var prefixSum = 0;
    var maxLen = 0;
    var startIndex = -1, endIndex = -1;
    sumIndex[0] = -1; // Xử lý trường hợp tổng bằng target ngay từ đầu
    for (var i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if ((prefixSum - target) in sumIndex) {
            var prevIndex = sumIndex[prefixSum - target];
            var length_1 = i - prevIndex;
            if (length_1 > maxLen) {
                maxLen = length_1;
                startIndex = prevIndex + 1;
                endIndex = i;
            }
        }
        if (!(prefixSum in sumIndex)) {
            sumIndex[prefixSum] = i;
        }
    }
    return startIndex !== -1 ? nums.slice(startIndex, endIndex + 1) : [];
}
// Test case
var num = [5, 6, -5, 5, 3, 5, 3, -2, 0];
var target = 8;
console.log(longestSubArrayWithSum(num, target));
