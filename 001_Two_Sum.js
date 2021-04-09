// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// seen = {3: 0, 2: 1, }
// for loop (i)
// currentNum = nums[i]
// neededNum = target - currentNum
// check if seen[neededNum] !== undefined
// firstIndex = seen[needNum]
// return [firstIndex, i]

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


___________________________

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//array of nums 
// return indices(return i )
// only two numbers 
//if numA + numB === target return indices
/*
   [2,7,11,15]
   [3,2,4]
   [3,3]
  2 7 11 15
2 - 9 13 17
7 - - 18 23
11- -  - 27
15- -  -  -

"abjdkeba"
"bjdkeb"
"bjdkeb"
"". "a"
*/

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let numOne = nums[i];  //2
        for(let j= i + 1; j < nums.length; j++){
            let numTwo = nums[j]; //4
            if(numOne + numTwo === target)  //yes!
                 return [i, j]
        }
    }
};



const findTheIndices = (num, target) =>{
    let seen = {};  

    for(let i = 0; i < num.length; i++){
      let currentNum = num[i]; //[7,2, 11, 4]

      neededNum = target - currentNum;  //9-2= 7

      if(seen[neededNum] === undefined){
              seen[currentNum] = i;  //{7:0} 
      } else {
        firstIndex = seen[neededNum]  // {7:0}
        return [firstIndex, i]   
      }
    }
    return "not found"
}


console.log(findTheIndices([2,7,11,15], 9))


// 3 sum!! 
//nums can only be used once 





function twoSum(num, target){
    
  let seen = {};
  
  for(let i = 0; i < num.length; i++){  // [2,7,11,15]
      let currentNum = num[i];
      
      let numNeeded = target - currentnum; // 9-7 = 2
      
      if(seen[numNeeded] === undefined){  // 
          seen[currentNum] = i  // {2:0} //
      } else {
          firstIndex = seen[numNeeded];  //{2:0}
          return [firstIndex, i]//0,1
      }
  }

  

}