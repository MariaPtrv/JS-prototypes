Array.prototype.forEach = function(callback) {
    let arr = this
    console.log(this)
    console.log(arr[0])
    for (let index=0; index < arr.length; index++) {
        console.log("inside item: " + arr[index] + "  index: " + index);
        callback.call(arr[index], index, arr);
    }
    return callback
};

[1,2,3].forEach(
    function (item, index){
        console.log( item+ "  " + index )
    })