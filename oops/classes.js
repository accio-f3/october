// what ever function you were making earlier
// just write that function inside class and name
// it constructor

class BankAccount {
  // constructor is keyword
  constructor(name, branch, accountBalance) {
    this.name = name;
    this.branch = branch;
    this.accountBalance = accountBalance;
  }
  withDraw(amount) {
    this.accountBalance -= amount;
  }
}
// without inheritance
// class SavingsAccount {
//   constructor(name, branch, accountBalance) {
//     this.name = name;
//     this.branch = branch;
//     this.accountBalance = accountBalance;
//     this.limit = 10000;
//   }
//   withDraw(amount) {
//     this.accountBalance -= amount;
//   }
//   educationLoan() {
//     console.log(`you have been allocated with ${100 * accountBalance}`);
//   }
// }

class SavingsAccount extends BankAccount {
  constructor(name, branch, accountBalance) {
    // this.name = name;
    // this.branch = branch;
    // this.accountBalance = accountBalance;
    // super keyword is basically giving me access
    // to constructor fn of parent class
    super(name, branch, accountBalance);
    this.limit = 10000;
  }
  educationLoan() {
    console.log(`you have been allocated with ${100 * accountBalance}`);
  }
}

// const customer1 = new BankAccount("affan", "sbi", 100000);
const customer2 = new SavingsAccount("rockey", "kotak", 1000);

console.log(customer2);


// for a first class BankAccount
// BankAccount.__proto__ will be Function.prototype

// for a child Class (inherting from any other class)
// SavingsAccount.__proto__ will be BankAccount Class
