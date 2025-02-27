// 🎯 Interface IBankAccount
interface IBankAccount {
    accountNumber: string;
    balance: number;
    accountHolder: string;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    transfer(amount: number, targetAccount: IBankAccount): void;
    getAccountInfo(): string;
    getBalanceHistory(): string[];
}

//  Định nghĩa kiểu tài khoản
type AccountType = "bronze" | "silver" | "gold";

//  Class BankAccount
class BankAccount implements IBankAccount {
    private balanceHistory: string[] = [];
    private transactionCount: number = 0;
    private dailyTransferTotal: number = 0;
    private lastTransactionDate: string = new Date().toDateString();

    constructor(
        public accountNumber: string,
        public accountHolder: string,
        public balance: number,
        public accountType: AccountType
    ) {}

    //  Reset số lần giao dịch hằng ngày nếu sang ngày mới
    private resetDailyTransaction() {
        const today = new Date().toDateString();
        if (this.lastTransactionDate !== today) {
            this.transactionCount = 0;
            this.dailyTransferTotal = 0;
            this.lastTransactionDate = today;
        }
    }

    //  Lấy giới hạn giao dịch dựa vào accountType
    private getLimits() {
        const limits = {
            bronze: { deposit: [50, 3000], withdraw: [10, 1000], transfer: [10, 5000], dailyLimit: 100000, maxTx: 3 },
            silver: { deposit: [50, 10000], withdraw: [10, 5000], transfer: [10, 10000], dailyLimit: 300000, maxTx: 5 },
            gold: { deposit: [10, Infinity], withdraw: [5, Infinity], transfer: [10, Infinity], dailyLimit: 1000000, maxTx: Infinity }
        };
        return limits[this.accountType];
    }

    //  Nạp tiền vào tài khoản
    deposit(amount: number): void {
        this.resetDailyTransaction();
        const [min, max] = this.getLimits().deposit;

        if (amount < min || amount > max) {
            console.log(` Deposit failed: Amount must be between ${min}$ and ${max}$.`);
            return;
        }
        if (this.transactionCount >= this.getLimits().maxTx) {
            console.log(" Deposit failed: Maximum daily transactions reached.");
            return;
        }

        this.balance += amount;
        this.balanceHistory.push(`Deposited ${amount}$`);
        console.log(` ${this.accountHolder} deposited ${amount}$. New balance: ${this.balance}$.`);

        this.transactionCount++;
    }

    //  Rút tiền từ tài khoản
    withdraw(amount: number): void {
        this.resetDailyTransaction();
        const [min, max] = this.getLimits().withdraw;

        if (amount < min || amount > max) {
            console.log(` Withdrawal failed: Amount must be between ${min}$ and ${max}$.`);
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
        this.balanceHistory.push(`Withdrew ${amount}$`);
        console.log(` ${this.accountHolder} withdrew ${amount}$. New balance: ${this.balance}$.`);

        this.transactionCount++;
    }

    // 🟢 Chuyển khoản
    transfer(amount: number, targetAccount: IBankAccount): void {
        this.resetDailyTransaction();
        const [min, max] = this.getLimits().transfer;
        const dailyLimit = this.getLimits().dailyLimit;

        if (amount < min || amount > max) {
            console.log(` Transfer failed: Amount must be between ${min}$ and ${max}$.`);
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

        this.balanceHistory.push(`Transferred ${amount}$ to ${targetAccount.accountHolder}`);
        console.log(` ${this.accountHolder} transferred ${amount}$ to ${targetAccount.accountHolder}.`);
    }

    //  Lấy thông tin tài khoản
    getAccountInfo(): string {
        return `Account: ${this.accountNumber} | Holder: ${this.accountHolder} | Type: ${this.accountType} | Balance: ${this.balance}$`;
    }

    //  Lấy lịch sử giao dịch
    getBalanceHistory(): string[] {
        return this.balanceHistory;
    }
}

//  Tạo danh sách tài khoản
const acc1 = new BankAccount("123456", "Alice", 5000, "bronze");
const acc2 = new BankAccount("654321", "Bob", 10000, "silver");
const acc3 = new BankAccount("789012", "Charlie", 50000, "gold");

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
