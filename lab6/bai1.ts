// Class Decorator
function logClass<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(`Class ${constructor.name} đã được khởi tạo.`);
}

// Property Decorator
function logProperty(target: any, context: ClassFieldDecoratorContext) {
    console.log(`Thuộc tính "${String(context.name)}" được định nghĩa.`);
}

// Method Decorator
function logMethod(target: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {  // Fix lỗi `this has type 'any'`
        console.log(`Gọi phương thức "${String(context.name)}" với tham số:`, args);
        const result = target.apply(this, args);
        console.log(`Kết quả trả về của "${String(context.name)}":`, result);
        return result;
    };
}

// Áp dụng các decorator vào class Calculator
@logClass
class Calculator {
    @logProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }

    @logMethod
    subtract(a: number, b: number): number {
        return a - b;
    }
}

// Test thử class Calculator
const calc = new Calculator("My Calculator");
calc.add(5, 3);
calc.subtract(10, 4);
