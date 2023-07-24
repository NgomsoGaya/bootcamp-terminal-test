import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('Test my findItemsOver20 function', function () {
    it("should return the list of products with a quantity larger than 20 when called with an object with products that have a quantity over 20" , function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3},]),  [{name : 'pears', qty : 37},{name : 'bananas', qty : 27},]);

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return an empty list when called with a list of products that does not have a quantity of over 20" , function(){
        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 3}]), []);

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return an empty list when called with anything random", function(){
        assert.deepEqual(findItemsOver20("some random text"), []);
    });

});