let obj1 = {
  nam: "parvez",
};

let obj2 = {
  city: "Delhi",
  nam: "pc",
  getDetails() {
    console.log(`Hi I am ${this.nam} and I am from ${this.city}`);
  },
};

// obj2.__proto__ -> Object.prototype

obj1.__proto__ = obj2;

obj1.getDetails();

obj2.getDetails();
