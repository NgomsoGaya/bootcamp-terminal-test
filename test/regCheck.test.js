import assert from "assert";
import regCheck from "../regCheck.js";

describe('Test my regCheck function', function () {
    it("should return 'True' when called with a reg number that ends with location" , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));

       // assert.deepEqual([2,2],[2,2]);//
    });

    it( "should return 'False' when called with number that does not end with location", function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return 'False' when called with any string that is not a registration number", function(){
        assert.equal(regCheck('South Side Sol', 'CA'), false);
    });

});