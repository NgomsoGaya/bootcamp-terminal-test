import assert from "assert";
import transportFee from "../transportFee.js";

describe('Test my transportFee function', function () {
    it("should return the price of the transport when called with a string that's morning " , function(){
        assert.deepEqual(transportFee('morning'),  'R20');

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return free when called with with the string nightshift" , function(){
        assert.deepEqual(transportFee("nightshift"), 'free');

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return R10 when called with the string afternoon", function(){
        assert.deepEqual(transportFee("afternoon"), "R10")
    })

});