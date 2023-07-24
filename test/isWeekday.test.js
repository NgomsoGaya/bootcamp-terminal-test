import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test my isWeekday function', function () {
    it("should return 'True' when called with a day on the week" , function(){
        assert.equal(true, isWeekday("Monday"));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 'False' when called with a weekend day", function(){
        assert.equal(isWeekday("Sunday"), false);

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return 'False' when called with any random string", function(){
        assert.equal(isWeekday("March"), false)
    })
});