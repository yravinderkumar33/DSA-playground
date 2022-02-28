const pipe = (...fns) => x => fns.reduce((f, g) => g(f), x);

function TMap(f) {
    return function (rf) {
        return (acc, val) => {
            return rf(acc, f(val));
        };
    };
}

const TFilter = predicate => rf => (acc, x) => predicate(x) ? rf(acc, x) : acc;

const add = (a) => a + 1;
const multiple = (a) => a * 2;
const cons = arg => ({ arg })

const result = pipe(add, multiple, cons)(1);
console.log(result)