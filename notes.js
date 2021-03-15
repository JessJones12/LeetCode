//anagram
//compare two words--> are they the same
//if same return true 
//if false return false
//store in a hash
// "care" "earau"
//loop through first string
//store in a hash
//"c"--> have we seen? nope so create 
//c:1--> yes! so now c: 0
//a:1--> yes! so now a: 0  (-1)--> return false
//r:1--> yes! so now a: 0
//e:1--> yes! so now e: 0
//go through the second loop and if we've seen the letter decrement by 1 
//time: o (n) loop through twice
//Space: o(1)

// var isAnagram = function(s, t) {
// if(s.length !== t.length) {
//     return false;
// }
// let currentCount = {};
// for(let letter of s){  //"c" , "a", "r" ,"e"
//     if(currentCount[letter] === undefined) {
//         currentCount[letter] =1;  // "c:1", "a:"...
//     } else{
//         currentCount[letter] +=1
//     }
// }
// for(let letter of t){
//     if(currentCount[letter] === undefined) {  //earau
//         return false 
//     }
//     if(currentCount[letter] < 1){
//         return false 
//     }
//     currentCount[letter] --
// }
//  return true 
// };


// let numIslands = function(grid) {
//     if(grid === null || grid.length === 0) {
//         return 0;
//     }

//     let numberOfIslands = 0;

//     for(let i =0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             if(grid[i][j] === 1){
//                 numberOfIslands +=1
//                 markSeen(grid, i , j)
//             }
//         }
//     }
//     return numberOfIslands;
// }

// const markSeen = function(grid, i, j) {
//     if(i > 0 || i >= grid.length || j > 0 || j > grid[i].length || grid[i][j] === '0' ) {
//         return;
//     }

//     grid[i][j] = '0'

//     markSeen(grid, i -1, j)
//     markSeen(grid, i +1, j)
//     markSeen(grid, i, j +1)
//     markSeen(grid, i, j -1)

// }

// array three sum 

Interviewer Prompt
Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.
Examples
arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12 ]]


//array of nums
//target sum 
//all triplets can return the sum
//edge cases: might be a case where nums don't add up 
//might be a null array
//there can be negative nums
// we want to iterate through the array with i 
// then we want to loop through again i+ 1 = j 
//the store this sum in a hash and subtract it from the total to find out the difference of what we 
//to make up the difference and if it equals the num then we can push it into an array  
// {-15: 12, 3},....


i 
[12, 3, 1, 2, -6, 5, -8, 6], 0
     j 

[-3, 3, 5, 10, 15, 20]
     i  l          r

-3
3 + 20 = 23

need = 13
-3, X, Y

target = 10

const arrayThreeSum = (array, target) => {
    array.sort() // space = O(n) time O(n * log(n))
    
    let answers = []
    for (let i = 0; i < array.length; i++) {
        currentEle = array[i] // 3
        let twoSumNeeded = target - currentEle // 10 - 3 = 7
        let left = i + 1 // 2
        let right = array.length - 1 // 5
        while (left < right) { // 2 < 5
            let leftNumber = array[left] //5
            let rightNumber = array[right] //20
            if (leftNumber + rightNumber === twoSumNeeded) { // 13 === 13
                answers.push([currentEle, leftNumber, rightNumber]) //[[-3, 3, 10]]
                break
            } else if (leftNumber + rightNumber > twoSumNeeded) { // 18 > 13
                right--
            } else {
                left++
            }
        }

    }

    return answers

}


     const arrayThreeSum = (array, target) => {
            let twoElements = {};
            let sumsArray = [];

            for(let i = 0; i < array.length; i++){
                let currentEle = array[i];  //12

                for(let j = i +1; j < array.length;i++){
                    let nextEle = array[j]  //3
                let sum = currentEle[i] + nextEle[j]  
                      numberWeNeed = target - sum   //-15
                     twoElements[numberWeNeed] = [currentEle, nextEle] 
                      }  // 12 + 3 = 15 (target (0) - sum (15) = -15 ) [12, 3, -15]
                }
            }

            for(let l = 0; l < array.length; l++){
                        let value = array[i];
                        if(twoElements[value]) {
                         sumsArray.push( twoElements[value].concat([value]))
                        }
            }
            return sumsArray 
     