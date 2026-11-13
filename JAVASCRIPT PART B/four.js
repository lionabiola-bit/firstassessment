// Problem 4 — Private Counter Factory Easy
// Write createCounter() that returns an object with increment(), decrement(),
// and value as a getter (not a plain property),
// keeping the internal count truly private via closure.
function createCounter() {
  // 1. The private variable. It lives inside this function's scope,
  //    so nothing outside can reach it directly.
  let count = 0;

  // 2. Return an object whose methods "close over" count (a closure)
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    // 3. A getter: read like a property (counter.value), but it runs a function
    get value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value); // 1
console.log(counter.count); // undefined — not directly accessible
