// Tìm sub-array có độ dài lớn nhất với tổng các phần tử cho trước.
// Ví dụ:
// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8  
// sub-array có tổng = 8 bao gồm:
//  { -5, 5, 3, 5 }{ 3, 5 }{ 5, 3 } 
// => sub-array dài nhất là: { -5, 5, 3, 5 } có length = 4

function longestSubArrayWithSum(nums: number[], target: number): number[] {
    let sumIndex: { [key: number]: number } = {}; // Dùng object thay Map
    let prefixSum = 0;
    let maxLen = 0;
    let startIndex = -1, endIndex = -1;

    sumIndex[0] = -1; // Xử lý trường hợp tổng bằng target ngay từ đầu

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if ((prefixSum - target) in sumIndex) {
            let prevIndex = sumIndex[prefixSum - target];
            let length = i - prevIndex;
            if (length > maxLen) {
                maxLen = length;
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
const num: number[] = [5, 6, -5, 5, 3, 5, 3, -2, 0];
const target = 8;
console.log(longestSubArrayWithSum(num, target));