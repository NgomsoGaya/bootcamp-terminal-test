import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('Test my countAllPaarl function', function () {
    it("should return a 2 when called with  2 reg numbers from paarl" , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 1 when called with 1 reg number from paarl", function(){
        assert.equal(countAllPaarl('CJ 182736'), 1 );

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return 0 when called with 0 registration numbers from paarl", function(){
        assert.equal(countAllPaarl('CA 123456', 'GP 123456'), 0);
    });

});