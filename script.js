Array.prototype.map= function(callback) {
    let newArray = []
    for (let index=0; index < this.length; index++) {
        let currentValue = this[index]
        newArray.push(callback( currentValue, index, this));
    }
    return  newArray;
};

let array = [1,2,3,4,5]
let newArray = array.map( (item, index, arr) =>{
       return (item * 2)
    })
console.log(newArray)