const throttleFn2 = (oldFn, cooldownTime) => {
  let execute = true;
  return function (...args) {
    if (execute) {
      oldFn(...args);
      execute = false;
      setTimeout(() => {
        execute = true;
      }, cooldownTime);
    }
  };
};
