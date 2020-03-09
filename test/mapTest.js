const map = require("../map");
const assert = require("chai").assert;

describe("#map", function() {
  it("returns ['g','c','t','m','t'] for (['ground', 'control', 'to', 'major', 'tom'], word => word[0])", function() {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g","c","t","m","t"]);
  });
});