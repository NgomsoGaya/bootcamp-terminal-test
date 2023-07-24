import assert from "assert";
import fromWhere from "../fromWhere.js";

describe("Test my fromWhere function", function () {
  it("should return the name of the city when called with with a reg number either from cape town, bellville or paarl", function () {
    assert.deepEqual(fromWhere("CY 567489"), "Bellville");

    //assert.deepEqual([2,2],[2,2]);//
  });

  it("should return SOME OTHER PLACE when called with with a reg number that's not either from cape town, bellville or paarl or any data type ", function () {
    assert.deepEqual(fromWhere("Big Dawg"), "Some other place!");

    // assert.deepEqual([2,2],[2,2]);//
  });

  it("should return from paarl when called with a string that starts with CJ", function () {
    assert.deepEqual(fromWhere("CJ 123456"), "Paarl");
  });
});
