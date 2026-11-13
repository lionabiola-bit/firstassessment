// Problem 3 — Deep Freeze Medium
// Object.freeze only freezes the top level. Write deepFreeze(obj) that recursively
// freezes an object and all of its nested objects, then returns it.
function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (
      typeof value === "object" &&
      value !== null &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  }
  return obj;
}

const config = deepFreeze({
  api: { baseUrl: "https://x.com", retries: 3 },
  debug: false,
});

try {
  config.api.baseUrl = "https://changed.com";
} catch (e) {
  console.log("Blocked:", e.message);
}

try {
  config.debug = true;
} catch (e) {
  console.log("Blocked:", e.message);
}

console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api)); // true
