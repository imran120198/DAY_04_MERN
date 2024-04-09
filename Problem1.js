// Problem Statement
// Implement a series of functions that demonstrate closures to maintain state, such as a counter or a rate limiter.

const Counter = (initCount = 0) => {
  let count = initCount;

  const incrementCount = () => {
    count++;
    console.log("Increment", count);
  };

  const decrementCount = () => {
    count--;
    console.log("Decrement", count);
  };

  const getCount = () => {
    return count;
  };

  return { incrementCount, decrementCount, getCount };
};

const createCounter = Counter(1);
createCounter.incrementCount();
createCounter.incrementCount();
createCounter.incrementCount();
createCounter.decrementCount();
console.log("Current Count", createCounter.getCount());
