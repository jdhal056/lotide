const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", function() {
  it("returns [2, 3] for ('hello').l", function() {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
})