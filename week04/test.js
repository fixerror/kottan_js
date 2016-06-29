/**
 * Created by FixError on 11.06.2016.
 */

let MyPromise = require("../week04/index");
function mapper(val) {
    return val * 2;
}

let input = [Promise.resolve(1), new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve(2)
    },500);

}), Promise.resolve(3)];

MyPromise.map(input, mapper).then(
    rezult => {
        console.log(rezult);
    }
);

function reducer(prev, next) {
    let a = prev + next;
    return a;
}

MyPromise.reduce(input, reducer, 2).then(
    rezult => {
        console.log(rezult);
    }
);

MyPromise.some(input, 2).then(
    rezult => {
        console.log(rezult);
    }
    
);
