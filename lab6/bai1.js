var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// Class Decorator
function logClass(constructor) {
    console.log("Class ".concat(constructor.name, " \u0111\u00E3 \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o."));
}
// Property Decorator
function logProperty(target, context) {
    console.log("Thu\u1ED9c t\u00EDnh \"".concat(String(context.name), "\" \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a."));
}
// Method Decorator
function logMethod(target, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("G\u1ECDi ph\u01B0\u01A1ng th\u1EE9c \"".concat(String(context.name), "\" v\u1EDBi tham s\u1ED1:"), args);
        var result = target.apply(this, args);
        console.log("K\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1 c\u1EE7a \"".concat(String(context.name), "\":"), result);
        return result;
    };
}
// Áp dụng các decorator vào class Calculator
var Calculator = function () {
    var _classDecorators = [logClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _add_decorators;
    var _subtract_decorators;
    var Calculator = _classThis = /** @class */ (function () {
        function Calculator_1(name) {
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
            __runInitializers(this, _name_extraInitializers);
            this.name = name;
        }
        Calculator_1.prototype.add = function (a, b) {
            return a + b;
        };
        Calculator_1.prototype.subtract = function (a, b) {
            return a - b;
        };
        return Calculator_1;
    }());
    __setFunctionName(_classThis, "Calculator");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [logProperty];
        _add_decorators = [logMethod];
        _subtract_decorators = [logMethod];
        __esDecorate(_classThis, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _subtract_decorators, { kind: "method", name: "subtract", static: false, private: false, access: { has: function (obj) { return "subtract" in obj; }, get: function (obj) { return obj.subtract; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Calculator = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Calculator = _classThis;
}();
// Test thử class Calculator
var calc = new Calculator("My Calculator");
calc.add(5, 3);
calc.subtract(10, 4);
