let obj = {
  a: 10,
};

function abc() {
  console.log("inside window");
  console.log('inside fn->',this);
}

console.log(obj);

// dataStructure.method()
abc.call(obj);

console.log(obj);

abc();

// steps involved inside call method when you write funtionName.call(objName);

// 1. it attaches funtionName function with objName object.
// 2. it executes funtionName function with objName context -> how?????
//          2 A. -> objName.funtionName();
// 3. delete funtionName from objName object


