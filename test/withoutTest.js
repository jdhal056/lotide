const without = require("../without");
const assert = require("chai").assert;

describe("#without", function() {
  it("returns [\"hello\", \"world\"] for ([\"hello\", \"world\", \"lighthouse\"], [\"lighthouse\"])", function() {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

  it("returns [1, 3] for ([1, 2, 3], [2])", function() {
    assert.deepEqual(without([1, 2, 3], [2]), [1, 3]);
  })
});