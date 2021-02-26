// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 

// Constraints:

// 0 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in ascending order.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let index = 1;
//     for(let i = 0; i < nums.length-1; i++) {  //[1,1,2,2,3,4,5]
//         if(nums[i] != nums[i + 1]) {   //1 //1
//             nums[index++] = nums[i + 1];   //1 = nums[]
//         }
//     }
//     return index;
// };

var removeDuplicates = function(nums) {
    if (nums.length === 0){
        return 0;
    }
     let pointer1 = 0;
     
     for(let pointer2 = 1; pointer2 < nums.length; pointer2 ++) {
         if(nums[pointer1] !== nums[pointer2]) {
             pointer1++;
             nums[pointer1] = nums[pointer2]
         }
     }
     return pointer1 + 1;
 };
 
 
 //sorted array of nums
 //remove duplicates in-place
 //each element only is returned once 
 //returns new length
 //modify orginal array 
 //ouput is the length of the new array 
 
 //i'm thinking filter method? will return new array so don't use that 
 //must modify and NOT make a copy 
 
 //loop through the array if current element is the same as another element then slice it out of array else continue through array 
 // we know that copies of elements can only be directly to the right of current element 
 
 //two pointer approach. references of two difference elements at once 
 //keep track of current element and unqiue elements
 //bypass its duplicate and move on to the next unqiue element 
 //firt index will always be unique 
 //if next index is unique we will place it next 
 