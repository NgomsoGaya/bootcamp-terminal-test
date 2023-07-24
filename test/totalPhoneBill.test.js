import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('Test my totalPhoneBill function', function () {
    it("should return the sum of the price of calls and sms's when called with with a string of calls and sms's" , function(){
        assert.deepEqual(totalPhoneBill('call, sms, call, sms, sms'),  'R7.45');

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return zero when called with with a string or any data type that is not call or sms" , function(){
        assert.deepEqual(totalPhoneBill("download, email sent"), 'R0.00');

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return zero when called with a random string", function(){
        assert.deepEqual(totalPhoneBill("watching youtube"), 'R0.00');
    });
});