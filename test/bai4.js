//  Class BankAccount
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance, accountType) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
        this.balanceHistory = [];
        this.transactionCount = 0;
        this.dailyTransferTotal = 0;
        this.lastTransactionDate = new Date().toDateString();
    }
    //  Reset số lần giao dịch hằng ngày nếu sang ngày mới
    BankAccount.prototype.resetDailyTransaction = function () {
        var today = new Date().toDateString();
        if (this.lastTransactionDate !== today) {
            this.transactionCount = 0;
            this.dailyTransferTotal = 0;
            this.lastTransactionDate = today;
        }
    };
    //  Lấy giới hạn giao dịch dựa vào accountType
    BankAccount.prototype.getLimits = function () {
        var limits = {
            bronze: { deposit: [50, 3000], withdraw: [10, 1000], transfer: [10, 5000], dailyLimit: 100000, maxTx: 3 },
            silver: { deposit: [50, 10000], withdraw: [10, 5000], transfer: [10, 10000], dailyLimit: 300000, maxTx: 5 },
            gold: { deposit: [10, Infinity], withdraw: [5, Infinity], transfer: [10, Infinity], dailyLimit: 1000000, maxTx: Infinity }
        };
        return limits[this.accountType];
    };
    //  Nạp tiền vào tài khoản
    BankAccount.prototype.deposit = function (amount) {
        this.resetDailyTransaction();
        var _a = this.getLimits().deposit, min = _a[0], max = _a[1];
        if (amount < min || amount > max) {
            console.log(" Deposit failed: Amount must be between ".concat(min, "$ and ").concat(max, "$."));
            return;
        }
        if (this.transactionCount >= this.getLimits().maxTx) {
            console.log(" Deposit failed: Maximum daily transactions reached.");
            return;
        }
        this.balance += amount;
        this.balanceHistory.push("Deposited ".concat(amount, "$"));
        console.log(" ".concat(this.accountHolder, " deposited ").concat(amount, "$. New balance: ").concat(this.balance, "$."));
        this.transactionCount++;
    };
    //  Rút tiền từ tài khoản
    BankAccount.prototype.withdraw = function (amount) {
        this.resetDailyTransaction();
        var _a = this.getLimits().withdraw, min = _a[0], max = _a[1];
        if (amount < min || amount > max) {
            console.log(" Withdrawal failed: Amount must be between ".concat(min, "$ and ").concat(max, "$."));
            return;
        }
        if (this.transactionCount >= this.getLimits().maxTx) {
            console.log(" Withdrawal failed: Maximum daily transactions reached.");
            return;
        }
        if (amount > this.balance) {
            console.log(" Withdrawal failed: Insufficient balance.");
            return;
        }
        this.balance -= amount;
        this.balanceHistory.push("Withdrew ".concat(amount, "$"));
        console.log(" ".concat(this.accountHolder, " withdrew ").concat(amount, "$. New balance: ").concat(this.balance, "$."));
        this.transactionCount++;
    };
    // 🟢 Chuyển khoản
    BankAccount.prototype.transfer = function (amount, targetAccount) {
        this.resetDailyTransaction();
        var _a = this.getLimits().transfer, min = _a[0], max = _a[1];
        var dailyLimit = this.getLimits().dailyLimit;
        if (amount < min || amount > max) {
            console.log(" Transfer failed: Amount must be between ".concat(min, "$ and ").concat(max, "$."));
            return;
        }
        if (this.transactionCount >= this.getLimits().maxTx) {
            console.log(" Transfer failed: Maximum daily transactions reached.");
            return;
        }
        if (this.dailyTransferTotal + amount > dailyLimit) {
            console.log(" Transfer failed: Daily transfer limit exceeded.");
            return;
        }
        if (amount > this.balance) {
            console.log(" Transfer failed: Insufficient balance.");
            return;
        }
        this.balance -= amount;
        targetAccount.balance += amount;
        this.dailyTransferTotal += amount;
        this.transactionCount++;
        this.balanceHistory.push("Transferred ".concat(amount, "$ to ").concat(targetAccount.accountHolder));
        console.log(" ".concat(this.accountHolder, " transferred ").concat(amount, "$ to ").concat(targetAccount.accountHolder, "."));
    };
    //  Lấy thông tin tài khoản
    BankAccount.prototype.getAccountInfo = function () {
        return "Account: ".concat(this.accountNumber, " | Holder: ").concat(this.accountHolder, " | Type: ").concat(this.accountType, " | Balance: ").concat(this.balance, "$");
    };
    //  Lấy lịch sử giao dịch
    BankAccount.prototype.getBalanceHistory = function () {
        return this.balanceHistory;
    };
    return BankAccount;
}());
//  Tạo danh sách tài khoản
var acc1 = new BankAccount("123456", "Alice", 5000, "bronze");
var acc2 = new BankAccount("654321", "Bob", 10000, "silver");
var acc3 = new BankAccount("789012", "Charlie", 50000, "gold");
//  Thực hiện giao dịch
acc1.deposit(1000);
acc1.withdraw(500);
acc1.transfer(2000, acc2);
acc2.deposit(5000);
acc2.withdraw(2000);
acc2.transfer(4000, acc3);
acc3.deposit(20000);
acc3.withdraw(10000);
acc3.transfer(30000, acc1);
//  In thông tin tài khoản
console.log("\n Account Information:");
console.log(acc1.getAccountInfo());
console.log(acc2.getAccountInfo());
console.log(acc3.getAccountInfo());
// 🔄 Lịch sử giao dịch
console.log("\n Transaction History:");
console.log(acc1.getBalanceHistory());
console.log(acc2.getBalanceHistory());
console.log(acc3.getBalanceHistory());
