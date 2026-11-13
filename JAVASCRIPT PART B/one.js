// Problem 1 — Deep Equal Easy
// Write deepEqual(objA, objB) that returns true if two objects have the same keys
// and values recursively (including nested objects), without using JSON.stringify.
function deepEqual(objA, objB) {
  // 1. Same value or same reference (also covers equal primitives like 1 === 1)
  if (objA === objB) return true;

  // 2. If either is not an object (or is null), and they weren't === above, they differ
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // 3. An array and a plain object should not count as equal
  if (Array.isArray(objA) !== Array.isArray(objB)) return false;

  // 4. Must have the same number of keys
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  // 5. Every key in A must exist in B, with a deeply equal value
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false; // recursion handles nesting
  }

  return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
