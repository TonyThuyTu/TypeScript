var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        this.items.push(item);
    };
    Container.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    };
    Container.prototype.getItems = function () {
        return this.items;
    };
    return Container;
}());
function filterContainer(container, predicate) {
    var filterContainer = new Container();
    for (var _i = 0, _a = container.getItems(); _i < _a.length; _i++) {
        var item = _a[_i];
        if (predicate(item)) {
            filterContainer.add(item);
        }
    }
    return filterContainer;
}
var container = new Container();
container.add(1);
container.add(2);
container.add(3);
container.add(4);
container.add(5);
container.remove(3);
container.remove(6);
console.log("Numbers: ".concat(container.getItems()));
// Even numbers
var evenNumbers = filterContainer(container, function (item) { return item % 2 === 0; });
evenNumbers.add(3);
evenNumbers.add(6);
evenNumbers.add(8);
evenNumbers.add(10);
evenNumbers.add(12);
console.log("Even numbers: ".concat(evenNumbers.getItems()));
//For even numbers
var evenNumbers2 = filterContainer(evenNumbers, function (item) { return item % 2 === 0; });
console.log("Even numbers 2: ".concat(evenNumbers2.getItems()));
