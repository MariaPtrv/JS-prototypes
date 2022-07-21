Array.prototype._join = function(separator) {
    let str = ""
    let s =  separator ? separator : ","
    for (let i = 0; i < this.length; i++) {
        if (i!== this.length-1 )
            str+=this[i] + s;
        else str+=this[i]
    }
    return str;
};

let array = [1,2,3,4,5]
let newArray = array._join("=")
console.log(newArray)

console.log(array.join("="))