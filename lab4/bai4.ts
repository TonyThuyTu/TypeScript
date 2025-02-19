interface IdBankAccount {
    accountNumber: number;
    balance: number;
    deposit(amount: number): void; //Hàm nạp tiền
    withdrawn(amount: number):void; //Hàm rút tiền
    getBalance(): number; //Hàm lấy số dư
}

class BankAccount implements IdBankAccount {
    public accountNumber: number;
    protected balance: number;
    private pin: string;

    constructor(accountNumber: number, balance: number, pin: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.pin = pin;
    }

    deposit(amount: number): void {
        if(amount > 0){
            this.balance += amount;
            console.log(`Đã nạp thành công ${amount} vào tài khoản. Số dư hiện tại ${this.balance}`);
        }else{
            console.log(`Số tiền nạp cần lớn hơn 0!`);
        }
    }

    withdrawn(amount: number): void {
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;    
            console.log(`Đã rút thành công ${amount}. Số dư hiện tại ${this.balance}`);
       }else{
            console.log(`Lỗi hoặc số dư không đủ!`);
       }
    }

    getBalance(): number {
        return this.balance;
    }

    private ValidatePin(pin: string): boolean {
        return this.pin === pin;
    }
}

class SavingAccount extends BankAccount {
    private InterestRate: number;

    constructor(accountNumber: number, balance: number, pin: string, InterestRate: number) {
        super(accountNumber, balance, pin);
        this.InterestRate = InterestRate;
    }

    applyInterest(): void {
        const interest = this.getBalance() * this.InterestRate / 100;
        this.deposit(interest);
        console.log(`Đã cộng lãi suất ${this.InterestRate}%. Số dư mới: ${this.getBalance()}`);
    }
}

const guest1 = new SavingAccount(123456, 5000, "1234", 100);

console.log("Tạo tài khoản thành công!");
console.log(`Mã số tài khoản: ${guest1.accountNumber}`)
console.log(`Số dư hiện tại: ${guest1.getBalance()}`);
guest1.deposit(500);       // Nạp tiền
guest1.withdrawn(300); // Rút tiền 
guest1.applyInterest();    // Cộng lãi suất
console.log(`Số dư cuối cùng: ${guest1.getBalance()}`);
