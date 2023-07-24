import assert from "assert";
import allFromTown from "../countAllFromTown.js";

describe('Test my allFromTown function', function () {
    it("should return the town registration numbers when called with with a list of registration numbers and a specific town" , function(){
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),  ['CL 124', 'CL 345', 'CL 341']);

       //assert.deepEqual([2,2],[2,2]);//
    });

    it("should return NONE registration numbers when called with with a list of registration numbers not matching a specific town" , function(){
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'), [] );

       // assert.deepEqual([2,2],[2,2]);//
    });

    it("should return an empty array when called with a random string and a specific town", function(){
        assert.deepEqual(allFromTown('some random text here', 'CA'), []);
    });
});