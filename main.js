// Day 16
// ### Question:1 *Sum of Even Numbers from Multiple Arrays*
// *Problem Statement:*
// You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.
// *Example:*
// typescript
// sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]) // [6, 14, 22]
// sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30]) // [12, 0, 60]
// sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12]) // [0, 6, 30]
// *Hint:*
// - Iterate through each array and sum up only the even numbers.
// - Store the sum for each array in a new array.
// - Return the new array containing the sums
function sumEvenNumbers(arr1, arr2, arr3) {
    var sumEven = function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
        return sum;
    };
    var sum1 = sumEven(arr1);
    var sum2 = sumEven(arr2);
    var sum3 = sumEven(arr3);
    return [sum1, sum2, sum3];
}
;
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // Output: [6, 14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // Output: [12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // Output: [0, 6, 30]
// ### Question:2 *Concatenate Strings from Arrays*
// *Problem Statement:*
// You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.
// *Example:*
// typescript
// concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])
// // ["abc", "def", "ghk"]
// concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])
// // ["sm", "sp", "gc"]
// concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"])
// // ["tcl", "ccs", "dsc"]
// *Hint:*
// - Iterate through each string in the arrays, extract the first letter, and concatenate them.
// - Store the concatenated result for each array in a new array.
// - Return the new array containing the concatenated strings.
function concatenateFirstLetters(arr1, arr2, arr3) {
    var concatenate = function (arr) {
        var result = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > 0) {
                result += arr[i][0];
            }
        }
        return result;
    };
    var concatenated1 = concatenate(arr1);
    var concatenated2 = concatenate(arr2);
    var concatenated3 = concatenate(arr3);
    return [concatenated1, concatenated2, concatenated3];
}
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]));
// Output: ["abc", "def", "ghk"]
console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"]));
// Output: ["sm", "sp", "gc"]
console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"]));
// Output: ["tcl", "ccs", "dsc"]
