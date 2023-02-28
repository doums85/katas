const assert = require("assert");

assert.strictEqual(typeof uniq, "function");
assert.strictEqual(uniq.length, 1);
assert.deepStrictEqual(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]), [
  "a",
  "b",
  "c",
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]), [
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq([]), []);
assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
assert.deepStrictEqual(uniq([undefined]), [undefined]);
assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
assert.deepStrictEqual(uniq([""]), [""]);
let test = ["a", "a", "b"];
uniq(test);
assert.deepStrictEqual(test, ["a", "a", "b"], "don't mutate the parameter");

