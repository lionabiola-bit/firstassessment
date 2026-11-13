//Problem 5 — Schema Validator Medium
// Write validateSchema(obj, schema) where schema maps each key to an expected
// typeof string (e.g. { name: 'string', age: 'number' }). Return an array of error
// messages for missing keys or type mismatches; return an empty array if valid.
function validateSchema(obj, schema) {
  const errors = [];

  // 1. Go through every key the schema expects
  for (const key of Object.keys(schema)) {
    const expected = schema[key]; // e.g. 'string', 'number', 'boolean'

    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      // 2. Key isn't on the object at all
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== expected) {
      // 3. Key exists but its type is wrong
      errors.push(`${key}: expected ${expected}, got ${typeof obj[key]}`);
    }
    // Otherwise the key exists with the right type, so there's no error
  }

  // 4. An empty array means the object is valid
  return errors;
}

const schema = { name: "string", age: "number", isAdmin: "boolean" };
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
