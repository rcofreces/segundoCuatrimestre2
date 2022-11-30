/* const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
} */

const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
        setTimeout(() => {
            callback([2, 3, 4]);
            setTimeout(() => {
                callback([2, 3, 4]);
            }, 1000)
        }, 5000)
    }, 2000)
}
    
const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
        console.log(i);
    }
    console.log(sum);
}

mainFunction(add);