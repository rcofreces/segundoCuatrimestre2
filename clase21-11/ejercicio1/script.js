/* const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4, 5]);
    }, 2000)
} */

//Funcion que toma los valores de un arreglo y suma todos sus valores y devuelve el resultado en el tiempo especificado
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
        console.log(i);
        sum += i;
    }
    console.log(sum);
}

mainFunction(add);