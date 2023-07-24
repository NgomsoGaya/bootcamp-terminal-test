import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('Test my findItemsOver function', function () {
    it("should return the list of products with a quantity larger than the threshold when called with an object with products that have a quantity over threshold" , function(){
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}], 15),  [{name : 'pears', qty : 37},{name : 'bananas', qty : 27},]);

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return an empty list when called with a list of products that does not have a quantity of over threshold" , function(){
        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},{name : 'pears', qty : 3}], 15), []);

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return an empty list when called with any random string", function(){
        assert.deepEqual(findItemsOver("some random text"), []);
    });

});