import "core-js/modules/es.array.flat";
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.promise";
import "core-js/modules/es.promise.finally";
const data = [1, 2, [3, 4[(5, 6)]]];
const result = data.flat(2);
console.log(result);
Promise.resolve().finally();