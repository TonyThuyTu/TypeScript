var m = [2, 10, 15, 20, 7, 3, 7, 4];
var a = m.sort(function (a, b) { return a - b; });
console.log(a);
var b = m.sort(function (b, a) { return a - b; });
console.log(b);
