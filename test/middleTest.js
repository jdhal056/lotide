const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", function() {
  it("returns [3] for [1, 2, 3, 4, 5]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [\"Lighthouse\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", function() {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns [\"There\", \"Lighthouse\"] for [\"Hi\", \"There\", \"Lighthouse\", \"Labs\"]", function() {
    assert.deepEqual(middle(["Hi", "There", "Lighthouse", "Labs"]), ["There", "Lighthouse"]);
  });
});