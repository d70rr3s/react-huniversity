// https://davidarvelo.com/blog/2014/12/array-number-ranges-in-javascript-es6/
export function *range(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
