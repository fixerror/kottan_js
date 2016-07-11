/**
 * Created by FixError on 28.06.2016.
 */
"use strict";

var assert = require("assert");
let MyPromise = require("../index");

describe("Promise.reduce-spec", function() {
    function reducer(prev, next) {
        let a = prev + next;
        return a;
    }
    specify("should reduce input promises array", function() {
        var input = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
        return MyPromise.reduce(input, reducer, 2).then(
            function(results) {
                assert.deepEqual(results, 8);
            },
            assert.fail
        );
    });
    
});
