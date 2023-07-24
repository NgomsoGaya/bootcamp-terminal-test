import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe("Test my yearsAgo function", function () {
  it("should return 10 when called with a year that is 10 years ago from today", function () {
    assert.equal(10, yearsAgo(2013));

    // assert.deepEqual([2,2],[2,2]);//
  });

  it("should return 3 when called with a year that is 3 years ago from today", function () {
    assert.equal(yearsAgo(2020), 3);

    // assert.deepEqual([2,2],[2,2]);//
  });

  it("should return 0 when called with a year the same as the current year", function () {
    assert.equal(yearsAgo(2023), 0);
  });
});
