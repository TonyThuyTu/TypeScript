// interface IBankAccount {
//     readonly accountNumber: number;
//     getBalance(): number;
//     deposit(amount: number): void;
//     withdraw(amount: number, pin: string): void;
// }

// class BankAccount implements IBankAccount {
//     private balance: number;
//     private pin: string;

//     constructor(public readonly accountNumber: number, initialBalance: number, pin: string) {
//         this.balance = initialBalance;
//         this.pin = pin;
//     }

//     deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`✅ Đã nạp ${amount}$. Số dư hiện tại: ${this.balance}$.`);
//         } else {
//             console.log(`⚠️ Lỗi: Số tiền nạp phải lớn hơn 0!`);
//         }
//     }

//     withdraw(amount: number, pin: string): void {
//         if (!this.validatePin(pin)) {
//             console.log("⚠️ Sai mã PIN! Giao dịch thất bại.");
//             return;
//         }

//         if (amount <= 0) {
//             console.log("⚠️ Số tiền rút phải lớn hơn 0!");
//             return;
//         }

//         if (amount > this.balance) {
//             console.log("⚠️ Số dư không đủ!");
//             return;
//         }

//         this.balance -= amount;
//         console.log(`✅ Rút thành công ${amount}$. Số dư hiện tại: ${this.balance}$.`);
//     }

//     getBalance(): number {
//         return this.balance;
//     }

//     private validatePin(pin: string): boolean {
//         return this.pin === pin;
//     }
// }

// class SavingAccount extends BankAccount {
//     private interestRate: number;

//     constructor(accountNumber: number, initialBalance: number, pin: string, interestRate: number) {
//         super(accountNumber, initialBalance, pin);
//         this.interestRate = interestRate;
//     }

//     applyInterest(): void {
//         const interest = (this.getBalance() * this.interestRate) / 100;
//         this.deposit(interest);
//         console.log(`💰 Đã cộng lãi suất ${this.interestRate}%. Số dư mới: ${this.getBalance()}$.`);
//     }
// }

// // Tạo tài khoản khách hàng
// const guest1 = new SavingAccount(123456, 5000, "1234", 5);

// console.log("🎉 Tạo tài khoản thành công!");
// console.log(`📌 Mã số tài khoản: ${guest1.accountNumber}`);
// console.log(`💰 Số dư hiện tại: ${guest1.getBalance()}$`);

// guest1.deposit(500);        // Nạp tiền
// guest1.withdraw(300, "1234"); // Rút tiền (đúng PIN)
// guest1.withdraw(300, "0000"); // Rút tiền (sai PIN)
// guest1.applyInterest();      // Cộng lãi suất

// console.log(`💵 Số dư cuối cùng: ${guest1.getBalance()}$`);
