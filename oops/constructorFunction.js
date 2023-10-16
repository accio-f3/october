function CreateCustomer(name, branch, accountBalance) {
  // this keyword is storing my reference
  //  new memory
  this.name = name;
  this.branch = branch;
  this.accountBalance = accountBalance;
  this.addMoney = function (amount) {
    this.accountBalance += amount;
  };
}

// new keyword helps me creating new instance of a particular function
const customer1 = new CreateCustomer("Rockey", "hdfc", 2000000);
const customer2 = new CreateCustomer("shubham", "sbi", 200);

CreateCustomer.prototype.withDraw = function (amount) {
  this.accountBalance -= amount;
};

console.log(customer1);

console.log(customer2);

customer2.withDraw(200);

console.log(customer2);
