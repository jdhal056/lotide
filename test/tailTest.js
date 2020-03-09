const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", function() {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", function() {
    assert.deepEqual(tail([1, 2, 3, 4]),[2, 3, 4]);
  });

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});