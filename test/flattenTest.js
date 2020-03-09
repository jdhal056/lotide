const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", function() {
  it("returns [1, 2, 3, 4, 5] for [1, [2], [3, 4], 5]", function() {
    assert.deepEqual(flatten([1, [2], [3, 4], 5]), [1, 2, 3, 4, 5]);
  });
});