//callback is some function that takes in a callback and uses it

// let callbackUser = (cb) => {
//     cb()
// }



// let x = []
// console.log(x);


// const myMap = (cb, iter) => {

// }
// function myMap(cb, iter) {
//     for (let item of iter) {
//         cb(item)
//     }
// }
// myMap(console.log, [1, 2, 3])

//Filter
// function myFilter(cb, iter) { }
// let retArr = []
// for (let item of iter) {
//     if (cb(item)) {
//         retArr.push(item)
//     }
// }
// return retArr
// }

// let filteredArr = myFilter((x) => {
//     return x % 2 === 0
// }, [1, 2, 3])

//console.log(filteredArr);

//Reduce [1, 2, 3].reduce() => 6 if the cb totaled two numbers
let testArr = [1, 2, 3]
console.log(testArr.reduce((acc, x) => acc + x, 0))

function myReduce(cb, iter){
    total = 0
    for (let item of iter){
        total = cb(total, x)
    }
    return total
}

console.log(myReduce((acc, x) => acc + x, [1, 2, 3]))