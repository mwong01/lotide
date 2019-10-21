// const assertEqual = require('../assertEqual');

// const head = require('../head');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '555'); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
  it("returns 5 for [11,12,13]", () => {
    assert.strictEqual(head([11,12,13]), 5);
  });
});

// assertEqual(head([5,6,7]), 5); // pass
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
// assertEqual(head([11,12,13]), 5); // fail