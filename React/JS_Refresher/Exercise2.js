const arr = [10, 11, 12, 13, 14];

function exercise2(array) {
    let newArr = array.map((value) => {
        return {val : value}
    })
    return newArr;
}

const newEx = exercise2(arr);
console.log(newEx);