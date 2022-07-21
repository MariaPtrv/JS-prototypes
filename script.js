Array.prototype._shift = function() {
    let firstElement = this[0];
    for (let i = 1; i < this.length; i++){
        this[i-1] = this[i]
    }
    this.pop();
    return firstElement;
};

let array = [1,2,3,4,5]
let newArray = array._shift()
console.log(newArray)
console.log(array)

let array1 = [1,2,3,4,5]
console.log(array1.shift())
console.log(array1)