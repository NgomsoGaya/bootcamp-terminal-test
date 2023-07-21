import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('Test my isFromBellville function', function () {
    it("should return 'True' when called with a reg number that starts with'CY'" , function(){
        assert.equal(true, isFromBellville('CY 123'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 'False' when called with number that does not start with 'CY'", function(){
        assert.equal(false, isFromBellville('CJ 456789'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return 'False' when called with anything else random", function(){
        assert.equal(false, isFromBellville('5555555'));
    });
});