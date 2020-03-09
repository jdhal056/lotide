const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", function() {
  it("returns 'drama' for ({sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'The Wire')", function() {
    assert.strictEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "The Wire"), "drama");
  });

  it("returns 'undefined' for ({sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'That 70s Show')", function() {
    assert.strictEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, 'That 70s Show'), undefined);
  });
});