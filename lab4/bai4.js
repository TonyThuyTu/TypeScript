var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance, pin) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pin = pin;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("\u0110\u00E3 n\u1EA1p th\u00E0nh c\u00F4ng ".concat(amount, " v\u00E0o t\u00E0i kho\u1EA3n. S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i ").concat(this.balance));
        }
        else {
            console.log("S\u1ED1 ti\u1EC1n n\u1EA1p c\u1EA7n l\u1EDBn h\u01A1n 0!");
        }
    };
    BankAccount.prototype.withdrawn = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("\u0110\u00E3 r\u00FAt th\u00E0nh c\u00F4ng ".concat(amount, ". S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i ").concat(this.balance));
        }
        else {
            console.log("L\u1ED7i ho\u1EB7c s\u1ED1 d\u01B0 kh\u00F4ng \u0111\u1EE7!");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.ValidatePin = function (pin) {
        return this.pin === pin;
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, pin, InterestRate) {
        var _this = _super.call(this, accountNumber, balance, pin) || this;
        _this.InterestRate = InterestRate;
        return _this;
    }
    SavingAccount.prototype.applyInterest = function () {
        var interest = this.getBalance() * this.InterestRate / 100;
        this.deposit(interest);
        console.log("\u0110\u00E3 c\u1ED9ng l\u00E3i su\u1EA5t ".concat(this.InterestRate, "%. S\u1ED1 d\u01B0 m\u1EDBi: ").concat(this.getBalance()));
    };
    return SavingAccount;
}(BankAccount));
var guest1 = new SavingAccount(123456, 5000, "1234", 100);
console.log("Tạo tài khoản thành công!");
console.log("M\u00E3 s\u1ED1 t\u00E0i kho\u1EA3n: ".concat(guest1.accountNumber));
console.log("S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ".concat(guest1.getBalance()));
guest1.deposit(500); // Nạp tiền
guest1.withdrawn(300); // Rút tiền 
guest1.applyInterest(); // Cộng lãi suất
console.log("S\u1ED1 d\u01B0 cu\u1ED1i c\u00F9ng: ".concat(guest1.getBalance()));
