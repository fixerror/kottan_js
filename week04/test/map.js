/**
 * Created by FixError on 28.06.2016.
 */
"use strict";

var assert = require("assert");
let MyPromise = require("../index");
describe("Promise.map-spec", function () {

    function mapper(val) {
        return val * 2;
    }
    
    specify("should map input promises array", function() {
        var input = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
        return MyPromise.map(input, mapper).then(
            function(results) {
                assert.deepEqual(results, [2,4,6]);
            },
            assert.fail
        );
    });
    
});
