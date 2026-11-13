// Problem 2 — Object Diff Medium
// Write diffObjects(oldObj, newObj) that returns an object
// describing what changed: { added: {...}, removed: {...}, changed: {...} },
// comparing only top-level keys.
function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };

  // 1. Loop over the NEW object's keys
  for (const key of Object.keys(newObj)) {
    if (!(key in oldObj)) {
      // Key didn't exist before → it was added
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      // Key existed but the value is different → it changed
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
    // If the key exists in both with the same value, do nothing (unchanged)
  }

  // 2. Loop over the OLD object's keys to find anything that's gone
  for (const key of Object.keys(oldObj)) {
    if (!(key in newObj)) {
      // Key existed before but not now → it was removed
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}
console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
