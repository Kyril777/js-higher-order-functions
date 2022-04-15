/* We create a custom map function and two functions named fn1 (the logic for the squaring) and fn2 (the assignment for the newly-returned function). */

const customMap = (fn) => {
    return a => map(a, fn)
}

const square = x => x**2

const customMap = squareArray(square)

const set = [1, 2, 3, 4, 5]

squareArray(set)
