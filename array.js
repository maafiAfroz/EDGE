// Rest Operator - Collecting arguments into an array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([arr1, arr2]); // Output: [[1, 2, 3], [4, 5]]
console.log([arr1,...arr2]); // Output: [1, 2, 3, 4, 5]
console.log([...arr1,...arr2]); // Output: [1, 2, 3, 4, 5]

  