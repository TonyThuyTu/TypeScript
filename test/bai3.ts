// // Cho 1 mảng có chứa các phần tử trùng lặp, hãy tìm phần tử chiếm đa số (majority element). 
// Phần tử này phải có số lần xuất hiện > n/2 với n là độ dài của mảng.
// Ví dụ:
// {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}
// => 2 là majority element.

function FindMajorityElement(arr: number[]):number | null{
    const countMajorityElement: Record<number, number> = {};
    const n = arr.length;

    for (let num of arr){
        countMajorityElement[num] = (countMajorityElement[num] || 0) + 1;
        if(countMajorityElement[num] > n / 2)
            return num;
    }
    return null;
}

const arr = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
console.log(FindMajorityElement(arr));