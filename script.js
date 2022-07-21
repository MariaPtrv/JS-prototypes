Array.prototype._reduce = function(callback, initialValue) {
    let currentValue = initialValue
    for (let i = 0; i < this.length; i++){
        currentValue=callback(currentValue, this[i], i, this)
    }
    return currentValue;
};

let array = [{val: 10}, {val: 10},{val: 10},{val: 10}]
console.log(array._reduce(
    (previousValue, { val }) => previousValue + val, 0
));

let array1 = [{val: 10}, {val: 10},{val: 10},{val: 10}]
console.log(array1.reduce(
    (previousValue, { val }) => previousValue + val, 0
));
