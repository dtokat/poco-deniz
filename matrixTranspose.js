// test data
// test data
let matrix = [
    [2,4],
    [3,5],
    [6,9]
];
// function for Transpose
// function for Transpose
const Transpose = (A)=>{
    var array = [];
    // creating the shape of the new array
    // creating the shape of the new array
    for (let index = 0; index < A.length; index++) {
        array.push([]);
    }
// filling array with reversed indexs
// filling array with reversed indexs
    for(var i = 0; i < A.length; i++){
        for(var j = 0; j < A.length; j++){
            array[j].push(A[i][j]);
        };
}
return array;
}
console.log(Transpose(matrix))
