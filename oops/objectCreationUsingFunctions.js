function createCustomer(name, branch, accountBalance) {
  const customer = {}; // this is instance of Object
  customer.name = name;
  customer.branch = branch;
  customer.accountBalance = accountBalance;
  customer.withDraw = function (amount) { // ATM
    customer.accountBalance -= amount;
  };
  return customer;
}

const customer1 = createCustomer("sourabh", "sbi", 10000);
console.log(customer1);

const customer2 = createCustomer("puneet", "kotak", 50000);
console.log(customer2);


// customer obj -> instance of Object
// anyOther obj -> instance of Object