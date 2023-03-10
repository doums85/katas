const assert = require("assert");

assert.strictEqual(typeof odd, "function");
assert.strictEqual(odd.length, 1);
assert.strictEqual(odd.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  odd.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.deepStrictEqual(odd([1, 2, 3, 4]), [1, 3]);
assert.deepStrictEqual(odd([10, 20]), []);
assert.deepStrictEqual(odd([]), []);
let nums = [6, 7];
odd(nums);
assert.deepStrictEqual(nums, [6, 7], "don't mutate the parameter");
