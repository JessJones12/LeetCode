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


let numIslands = function(grid) {
    if(grid === null || grid.length === 0) {
        return 0;
    }

    let numberOfIslands = 0;

    for(let i =0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                numberOfIslands +=1
                markSeen(grid, i , j)
            }
        }
    }
    return numberOfIslands;
}

const markSeen = function(grid, i, j) {
    if(i > 0 || i >= grid.length || j > 0 || j > grid[i].length || grid[i][j] === '0' ) {
        return;
    }

    grid[i][j] = '0'

    markSeen(grid, i -1, j)
    markSeen(grid, i +1, j)
    markSeen(grid, i, j +1)
    markSeen(grid, i, j -1)

}