const swift = require('bindings')('swift');

swift.printHello();

console.time("swift.fibonacci");
console.log(swift.fibonacci(45));
console.timeEnd("swift.fibonacci");

console.time("js.fibonacci");
console.log(fibonacci(45));
console.timeEnd("js.fibonacci");

function fibonacci(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}