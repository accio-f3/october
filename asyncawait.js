// async keyword is just used to make a function
// asynchronous

// async function test1() {
//   return "hello";
// }

// console.log(test1());

// function test2() {
//   return "hello";
// }

// console.log(test2());

// const p1 = new Promise((resolve, reject) => {
//   resolve("hello");
// });

// async function test(){
//     return p1;
// }

// console.log(test());

// console.log(p1);

function intro(name) {
  return new Promise((resolve, reject) => {
    const condition = false;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi I am ${name}`);
      }, 1000);
    } else {
      reject("sorry no intro");
    }
  });
}

async function handlePromise() {
  // variable that store the result of
  // promise into it
  try {
    const val1 = await intro("nitish");
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

console.log('calling after async function');

// 1st -> it's appearing to be waiting but
// it's not actually waiting why ??
// because it's not freezing my browser
// that means it's not blocking my thread

// passport
// 1st fill the details
// 2nd get police verification
// 3rd submit your original 10th market