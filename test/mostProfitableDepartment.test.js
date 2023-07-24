import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js";

describe('Test my mostProfitableDepartment function', function () {
    it("should return a most profitable called with an object with department and their unique profits" , function(){
        assert.deepEqual(mostProfitableDepartment( [{department : 'hardware', sales : 4500, day : 'Monday'},{department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'}]), 'carpentry' );

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return the most profitable department when called with a list  of departments and their sales" , function(){
        assert.deepEqual(mostProfitableDepartment( [{department : 'hardware', sales : 45000, day : 'Monday'},{department : 'outdoor', sales : 1500, day : 'Monday'},
        {department : 'carpentry', sales : 5500, day : 'Monday'}]), 'hardware');

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return none when passed with a random string", function(){
        assert.deepEqual(mostProfitableDepartment("just another random text"), "none");
    });

});