function BankAcc(name, branch, accountBalance) {
  // this keyword is storing my reference
  //  new memory
  this.name = name;
  this.branch = branch;
  this.accountBalance = accountBalance;
}

BankAcc.prototype.withDraw = function (amount) {
  this.accountBalance -= amount;
};

BankAcc.prototype.addMoney = function (amount) {
  this.accountBalance += amount;
};

function SavingsAccount(name, branch, accountBalance) {
  // *** it's having the same  logic of BankAccount** //
  //   this.name = name;
  //   this.branch = branch;
  //   this.accountBalance = accountBalance;
  // **************************************************** //
  //   if I am calling it directly without .call method
  // it will point towards window object
  //   BankAcc(name,branch,accountBalance);
  // I just need to call my BankAcc with referring to new memory formed
  // new memory -> this
  //   constructor linking
  BankAcc.call(this, name, branch, accountBalance);
  this.withDrawLimit = 100000;
}

SavingsAccount.prototype.__proto__ = BankAcc.prototype;

const shubhamAccount = new SavingsAccount("shubham", "axis", 50000);

console.log(shubhamAccount);
shubhamAccount.withDraw(500);
console.log(shubhamAccount);

// SavingsAccount.prototype.withDraw = function (amount) {
//   this.accountBalance -= amount;
// };

// SavingsAccount.prototype.addMoney = function (amount) {
//   this.accountBalance += amount;
// };

SavingsAccount.prototype.educationLoan = function (amount) {
  console.log(`you have been credited ${amount} of amount as loan`);
};
