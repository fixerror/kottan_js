/**
 * Created by FixError on 11.06.2016.
 */
class MyPromise extends Promise {
    static map(iterable, mapper) {
        return new this((resolve, reject)=> {
            let rezult = [];
            let started = 0;

            for (let promise of iterable) {
                started++;
                promise.then(value => {
                    rezult.push(mapper(value));
                    if (!--started) {
                        resolve(rezult);
                    }
                }, reject)

            }
        }).catch(err=> {
            console.log(err)
        });
    }

    static reduce(input, reduser, initial) {
        return new this((resolve, reject)=> {
            let rezult = {};
            rezult.initial = initial;
            let started = 0;
            for (let promise of input) {
                started++;
                promise.then(value => {
                    rezult.initial = reduser(rezult.initial, value);
                    if (!--started) {
                        resolve(rezult.initial);
                    }
                }, reject)
            }
        }).catch(err=> {
            console.log(err)
        });
    }

    static some(input, start) {
        let rezult = [];
        let len = input.length;
        
        return new this((resolve, reject)=> {
            for (let promise of input) {
                   promise.then(value => {
                       if(rezult.length !==start){
                           rezult.push(value);
                       }else{
                           resolve(rezult);
                       }
                    })
            }
            
        }).catch(err=> {
            console.log(err)
        });
    }
}

module.exports = MyPromise;
