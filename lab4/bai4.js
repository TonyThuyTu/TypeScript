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
    function BankAccount(accountNumber, initialBalance, pin) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.pin = pin;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("\u2705 \u0110\u00E3 n\u1EA1p ".concat(amount, "$. S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ").concat(this.balance, "$."));
        }
        else {
            console.log("\u26A0\uFE0F L\u1ED7i: S\u1ED1 ti\u1EC1n n\u1EA1p ph\u1EA3i l\u1EDBn h\u01A1n 0!");
        }
    };
    BankAccount.prototype.withdraw = function (amount, pin) {
        if (!this.validatePin(pin)) {
            console.log("⚠️ Sai mã PIN! Giao dịch thất bại.");
            return;
        }
        if (amount <= 0) {
            console.log("⚠️ Số tiền rút phải lớn hơn 0!");
            return;
        }
        if (amount > this.balance) {
            console.log("⚠️ Số dư không đủ!");
            return;
        }
        this.balance -= amount;
        console.log("\u2705 R\u00FAt th\u00E0nh c\u00F4ng ".concat(amount, "$. S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ").concat(this.balance, "$."));
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.validatePin = function (pin) {
        return this.pin === pin;
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, initialBalance, pin, interestRate) {
        var _this = _super.call(this, accountNumber, initialBalance, pin) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.applyInterest = function () {
        var interest = (this.getBalance() * this.interestRate) / 100;
        this.deposit(interest);
        console.log("\uD83D\uDCB0 \u0110\u00E3 c\u1ED9ng l\u00E3i su\u1EA5t ".concat(this.interestRate, "%. S\u1ED1 d\u01B0 m\u1EDBi: ").concat(this.getBalance(), "$."));
    };
    return SavingAccount;
}(BankAccount));
// Tạo tài khoản khách hàng
var guest1 = new SavingAccount(123456, 5000, "1234", 5);
console.log("🎉 Tạo tài khoản thành công!");
console.log("\uD83D\uDCCC M\u00E3 s\u1ED1 t\u00E0i kho\u1EA3n: ".concat(guest1.accountNumber));
console.log("\uD83D\uDCB0 S\u1ED1 d\u01B0 hi\u1EC7n t\u1EA1i: ".concat(guest1.getBalance(), "$"));
guest1.deposit(500); // Nạp tiền
guest1.withdraw(300, "1234"); // Rút tiền (đúng PIN)
guest1.withdraw(300, "0000"); // Rút tiền (sai PIN)
guest1.applyInterest(); // Cộng lãi suất
console.log("\uD83D\uDCB5 S\u1ED1 d\u01B0 cu\u1ED1i c\u00F9ng: ".concat(guest1.getBalance(), "$"));
