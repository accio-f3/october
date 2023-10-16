const customer1 = {
  name: "Puneet",
  accountBalance: 1000,
  bank: "Hdfc",
  addMoney(amount) {
    this.accountBalance += amount;
  },
};

console.log(customer1);
customer1.addMoney(500);
console.log(customer1);

const customer2 = {
  name: "Anuj",
  accountBalance: 2000,
  bank: "Axis",
  addMoney(amount) {
    this.accountBalance += amount;
  },
};
