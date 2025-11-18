// let str = "sumit Bhaskar";
// let splitted = str.split("");
//  console.log("Before reverse:",splitted);



// let str = "sumit Bhaskar";
// let splitted = str.split("");
// let reversedArray = splitted.reverse();
// console.log("After reverse:",reversedArray);



// let str = "sumit Bhaskar";
// let splitted = str.split("");
// let reversedArray = splitted.reverse();
// let joined = reversedArray.join("");
// console.log("After join:",joined);

//Q1  Create an array and print all elements. =>

// let arr = [1,2,3,4,5];
// console.log(arr);

//Q2 Find the length of an array. =>

// let arr = [10, 20, 30, 40, 50];
// console.log("lenght of array is:", arr.length);

//Q3 Access the first and last element of an array. =>

// let arr = [10, 20, 30, 40, 50];
// console.log("First element is:", arr[0]);
// console.log("Last element is:", arr[arr.length - 1]);

//Q4 Add and remove elements using push(), pop(), shift(), and unshift(). =>

    // let arr = [10, 20, 30, 40, 50];
    // console.log("Original array:", arr);
    // arr.push(60);     // Add 60 at the end
    // console.log("After push:", arr);


    // arr.pop();     // Remove the last element
    // console.log("After pop:", arr);     

    // arr.unshift(24);  // Add 0 at the beginning
    // console.log("After unshift:", arr);

    // arr.shift();   // Remove the first element
    // console.log("After shift:", arr);

//Q5 Merge two arrays using concat(). =>


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArray = arr1.concat(arr2);
// console.log("Merged array:", mergedArray);


//Q6 Reverse an array using reverse(). =>

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log("Reversed array:", arr);

//Q7 Sort an array in ascending and descending order using sort(). =>

// let arr = [5, 2, 8, 1, 4];
// arr.sort((a, b) => a - b);
// console.log("Sorted array (ascending):", arr);

// arr.sort((a, b) => b - a);
// console.log("Sorted array (descending):", arr);

//Q8 Find the maximum and minimum number in an array. =>

    // let arr = [10, 5, 8, 1, 4];
    // let max = Math.max(...arr);
    // let min = Math.min(...arr);
    // console.log("Maximum number:", max);
    // console.log("Minimum number:", min);


//Q9 Check if a given element exists in an array using includes(). =>

// let arr = [10, 20, 30, 40, 50];
// let elementToCheck = 30;
// let exists = arr.includes(elementToCheck);
// console.log(`Element ${elementToCheck} exists in array:`, exists);


//10Convert a string to array using split() and vice versa using join(). =>

// let str = "sumit Bhaskar";
// let splitted = str.split("");
// console.log("After split:", splitted);

// let joined = splitted.join("");
// console.log("After join:", joined);


//Q11Print even and odd numbers from an array. =>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = arr.filter(num => num % 2 === 0);
// let oddNumbers = arr.filter(num => num % 2 !== 0);
// console.log("Even numbers:", evenNumbers);
// console.log("Odd numbers:", oddNumbers);

// Q12 Find the sum of all elements in an array. =>

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Sum of all elements:", sum);


//Q13 Find the average of all elements in an array. =>

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// let average = sum / arr.length;
// console.log("Average of all elements:", average);


//Q14 Remove duplicate elements from an array. =>

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [...new Set(arr)];
// console.log("Array with duplicates removed:", uniqueArray);


//Q15 Find the second largest number. =>

// let arr = [10, 5, 8, 1, 4];  
// arr.sort((a, b) => b - a);
// let firstLargest = arr[0];
// console.log("First largest number:", firstLargest);


// let arr = [10, 5, 8, 1, 4];  
// arr.sort((a, b) => b - a);
// let secondLargest = arr[1];
// console.log("Second largest number:", secondLargest);


//Q16 Count occurrences of each element. =>

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let elementCount = {};
// arr.forEach(num => {
//   elementCount[num] = (elementCount[num] || 0) + 1;
// });
// console.log("Element occurrences:", elementCount);   

//Q17 Find all prime numbers from an array. 


// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
// let primes = arr.filter(n => 
//   n > 1 && 
//   !Array.from({ length: n - 2 }, (_, i) => i + 2).some(x => n % x === 0)
// );

// console.log("Prime numbers:", primes);

//Q18 Rotate an array by k positions.
 
//    let arr = [1, 2, 3, 4, 5];
// let k = 2;

// // Make sure k is within array length
// k = k % arr.length;

// // Slice the last k elements and bring them to the front
// let rotated = arr.slice(-k).concat(arr.slice(0, arr.length - k));

// console.log("Original array:", arr);
// console.log("Array after rotating by", k, "positions:", rotated);

// Q19 Flatten a nested array (e.g., [1,[2,[3,4]]] → [1,2,3,4]).

//    let arr = [1, [2, [3, 4]]];

// function flattenArray(input) {
//   let result = [];
//   input.forEach(item => {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item)); // recursive call
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

// let flattened = flattenArray(arr);
// console.log("Flattened array:", flattened);

// Q20 Find intersection of two arrays.

//   let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// let intersection = arr1.filter(value => arr2.includes(value));

// console.log("Intersection of arrays:", intersection);


// Q21 Find union of two arrays.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let union = [...new Set([...arr1, ...arr2])];
// console.log("Union of arrays:", union);


//Q22 Move all zeroes to the end of the array

//  let arr = [0, 1, 0, 3, 12];
// let j = 0; // pointer for non-zero elements

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
//     j++;
//   }
// }

// console.log("Array after moving zeroes to the end:", arr);


// Q23 Find missing number in a sequence (1 to n).

// let arr = [1, 2, 4, 5, 6];
// let n = 6;

// // Sum of first n natural numbers
// let totalSum = (n * (n + 1)) / 2;

// // Sum of array elements
// let arrSum = arr.reduce((a, b) => a + b, 0);

// // Missing number
// let missing = totalSum - arrSum;

// console.log("Missing number is:", missing);

//24 Find pair of elements whose sum equals a given target.

// let arr = [1, 2, 3, 4, 5, 6];
// let target = 7;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(`Pair found: (${arr[i]}, ${arr[j]})`);
//     }
//   }
// }


//Q25 Sort array of 0s, 1s, and 2s without using sort().

// let arr = [0, 2, 1, 2, 0, 1, 1, 0];

// let low = 0, mid = 0, high = arr.length - 1;

// while (mid <= high) {
//   if (arr[mid] === 0) {
//     [arr[low], arr[mid]] = [arr[mid], arr[low]];
//     low++;
//     mid++;
//   } else if (arr[mid] === 1) {
//     mid++;
//   } else { // arr[mid] === 2
//     [arr[mid], arr[high]] = [arr[high], arr[mid]];
//     high--;
//   }
// }

// console.log("Sorted array:", arr);


//Q26 Reverse words in a sentence using arrays.

//Q27 Find common elements in three sorted arrays.

// let A = [1, 5, 10, 20, 40, 80];
// let B = [6, 7, 20, 80, 100];
// let C = [3, 4, 15, 20, 30, 70, 80, 120];

// let i = 0, j = 0, k = 0;
// let result = [];

// while (i < A.length && j < B.length && k < C.length) {
//     if (A[i] === B[j] && B[j] === C[k]) {
//         result.push(A[i]);
//         i++; j++; k++;
//     } else {
//         let minVal = Math.min(A[i], B[j], C[k]);
//         if (A[i] === minVal) i++;
//         else if (B[j] === minVal) j++;
//         else k++;
//     }
// }

// console.log(result);


//Q28 Implement array rotation using reverse method.

// function reverse(arr, start, end) {
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
// }

// let arr = [1,2,3,4,5,6,7];
// let d = 2;

// reverse(arr, 0, d-1);         // reverse first d elements
// reverse(arr, d, arr.length-1);// reverse rest
// reverse(arr, 0, arr.length-1);// reverse whole array

// console.log(arr);


//Q29 Merge two sorted arrays without using extra space.

// function merge(arr1, arr2) {
//     let n = arr1.length, m = arr2.length;
//     let gap = Math.ceil((n + m)/2);

//     while (gap > 0) {
//         let i = 0;
//         while (i + gap < n + m) {
//             // Both in arr1
//             if (i < n && i+gap < n) {
//                 if (arr1[i] > arr1[i+gap]) [arr1[i], arr1[i+gap]] = [arr1[i+gap], arr1[i]];
//             }
//             // arr1 and arr2
//             else if (i < n && i+gap >= n) {
//                 if (arr1[i] > arr2[i+gap-n]) [arr1[i], arr2[i+gap-n]] = [arr2[i+gap-n], arr1[i]];
//             }
//             // Both in arr2
//             else {
//                 if (arr2[i-n] > arr2[i+gap-n]) [arr2[i-n], arr2[i+gap-n]] = [arr2[i+gap-n], arr2[i-n]];
//             }
//             i++;
//         }
//         gap = (gap === 1) ? 0 : Math.ceil(gap/2);
//     }
// }

// let arr1 = [1,5,9,10,15,20];
// let arr2 = [2,3,8,13];
// merge(arr1, arr2);
// console.log(arr1);
// console.log(arr2);


//Q30 Find the longest consecutive sequence in an array

// let nums = [100,4,200,1,3,2];
// let numSet = new Set(nums);
// let longest = 0;

// for (let num of numSet) {
//     if (!numSet.has(num - 1)) { // start of sequence
//         let current = num;
//         let streak = 1;
//         while (numSet.has(current + 1)) {
//             current++;
//             streak++;
//         }
//         longest = Math.max(longest, streak);
//     }
// }

// console.log(longest);


//Q31 Find frequency of each element and store it in an object.

// let arr = [1,2,2,3,1,4,2];
// let freq = {};

// for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
// }

// console.log(freq);


//Q32 Replace all negative numbers with 0.

// let arr2 = [1, -2, 3, -4];

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0) arr2[i] = 0;
// }

// console.log(arr2);



//Q33 Remove falsy values (false, null, 0, "", undefined, NaN) from an array.

// let arr3 = [0, 1, false, 2, "", 3, null, NaN, 4, undefined];
// let filtered = arr3.filter(Boolean); // removes all falsy values
// console.log(filtered);

//Q34 Find duplicate elements and their count.

// let arr4 = [1,2,2,3,1,4,2];
// let duplicates = {};
// let freq2 = {};

// for (let num of arr4) {
//     freq2[num] = (freq2[num] || 0) + 1;
// }

// for (let key in freq2) {
//     if (freq2[key] > 1) duplicates[key] = freq2[key];
// }

// console.log(duplicates);

//Q35 Implement your own map() and filter() functions manually.

// Custom map function
// function myMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }

// // Custom filter function
// function myFilter(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// // Testing
// let numbers = [1, 2, 3, 4, 5];
// let mapped = myMap(numbers, x => x * 2);
// let filtered = myFilter(numbers, x => x % 2 === 0);

// console.log("Mapped:", mapped);
// console.log("Filtered:", filtered);





