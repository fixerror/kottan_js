/**
 * Created by FixError on 04.06.2016.
 */
function deepAssign(target, ...sources) {
    if (target === undefined || target === null) {
        throw new TypeError('First argument no object');
    }
    let to = Object(target);
    //TODO check object, Symbol, Set, Map
    sources.forEach((sources) => {
        if (sources === undefined || sources === null) {
            return ;
        }
        Reflect.ownKeys(sources).forEach((key)=> {
            if (!sources.propertyIsEnumerable(key)) {
                return ;
            } else {
                to[key] = sources[key];
            }
        });
    });
    return to;
}

//Test
let v = Symbol('test');
let st = new Set("1");
console.log(st);
let a = deepAssign({a: 1}, {a: 2}, {b: 3}, {a: {b: 4}}, st);
console.log(a);

let obj = Object.assign({a: 1}, {a: 2}, {b: 3}, {a: {b: 4}}, v, st);
console.log(obj);
