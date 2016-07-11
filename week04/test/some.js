/**
 * Created by FixError on 28.06.2016.
 */
"use strict";

var assert = require("assert");
let MyPromise = require("../index");
var input = [new Promise(function(resolve) {
    setTimeout(function () {
        resolve(2)
    },100);

})];
describe("Promise.some-spec", function () {
    specify("should some input promises array", function(done) {
        return MyPromise.some(input, 2).then(
            function(results) {
                assert.deepEqual(results, [1, 3]);
                
            },
            done()
        );
    });
});
