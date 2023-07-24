import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('Test my countRegNumber function', function () {
    it("should return a 2 when called with  2 reg numbers" , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 1 when called with 1 reg number", function(){
        assert.equal(countRegNumber('CA 182736'), 1 );

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return 0 when called with an empty string", function(){
        assert.equal(countRegNumber(''), 0);
    });

});