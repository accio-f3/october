class BankAccount {
  // constructor is keyword
  //   write # in front of the property
  #accountBalance;
  constructor(name, branch, accountBalance) {
    this.name = name;
    this.branch = branch;
    this.#accountBalance = accountBalance;
  }
  withDraw(amount) {
    // internally this may take UPI or your dob
    // or your secret question and answer
    this.#accountBalance -= amount;
  }
  //   getter
  getBalance() {
    return this.#accountBalance;
  }
  //   it will not accept any argument
  get balan() {
    // this is better as compared to the
    // above method
    return this.#accountBalance;
  }
  //   it should accept only 1 argument
  set balance(amount) {
    this.#accountBalance = amount;
  }
  //   addMoney(){
  //     // checking currency authencity
  //     //
  //     this.#accountBalance += amount;
  //   }
  setBalance(amount) {
    this.#accountBalance = amount;
    return this.#accountBalance;
  }
}

const customer1 = new BankAccount("shubham", "swiss", 5000000);

// console.log(customer1.getBalance());

console.log(customer1.balan);
customer1.balan=10;
customer1.balance=50;

console.log(customer1.balan);

console.log(customer1);

// Uncaught SyntaxError: Private field '#accountBalance'
// must be declared in an enclosing class
// (at privateProperties.js:17:10)
