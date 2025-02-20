"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
exports.multiply = multiply;
exports.sortAsc = sortAsc;
exports.sortDesc = sortDesc;
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, number) { return sum + number; }, 0);
}
function multiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (product, number) { return product * number; }, 1);
}
function sortAsc() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.sort(function (a, b) { return a - b; });
}
function sortDesc() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.sort(function (a, b) { return b - a; });
}
exports.default = {
    sum: sum,
    multiply: multiply,
    sortAsc: sortAsc,
    sortDesc: sortDesc
};
