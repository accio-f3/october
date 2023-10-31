function createPromise(delay, condition, resolvedData, error) {
  return new Promise((res, rej) => {
    if (condition) {
      setTimeout(() => {
        res(resolvedData);
      }, delay);
    } else {
      setTimeout(() => {
        rej(error);
      }, delay);
    }
  });
}

// condition1 && condition2 && condition3

const p1 = createPromise(
  3000,
  false,
  "p1 promise resolved",
  "p1 promised failed"
);

const p2 = createPromise(
  1000,
  false,
  "p2 promise resolved",
  "p2 promised failed"
);

const p3 = createPromise(
  5000,
  false,
  "p3 promise resolved",
  "p3 promised failed"
);

// promise.all is basically 'AND' condition
// of promises, it will wait for each and every promise
// to be fullfilled

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

//   if all promises gets fulfilled it will give you array of results of all promises
// if any promise fails it will give you error of that promise

// promise.any -> it will give you first resolved promise data
// if all promise are failing it will give you AggregateError: All promises were rejected

// promise.race -> it will give info of first promise from pending to settled.

// debouncing and throttling
