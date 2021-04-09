Help your interviewee get better! 
Overall very good for somebody without much practice! But, I think you could use more practice. I would suggest practising on leetcode as well.

Make sure you can really easily code up things like grids and are also fluent in easily looking into and accessing grids. Maybe also lookup some of JavaScript's functional API's. If you use those in an interview you can really impress :).

Your pseudocode could be a little more clear before you actually start coding, but I really liked that you came up with the separate function. 

Communication skills were good. 

So the question we did here was a question I regularly used at my company: https://gist.github.com/tscheepers/9fa9bee954b597607da062e13ca494ed
Our suggested solution is there as well.

A more complicated variation is also available on leetcode, which also deals with hidden fields: https://leetcode.com/problems/minesweeper/

Good luck with interviewing!



const _ = require('lodash');


/* 
Question: Write a function mine_sweeper(bombs, num_rows, num_cols) which retuns a 2D matrix with the mine sweeping field. bombs are a list of 2d coordinates where the bombs are located. A bomb should be represented as -1 and all other coordinates in the field should tell us how many bombs are in its direct vicinity.


mine_sweeper([[0,0],[0,1]], 3, 4) -> 
 i-->    0   1   2  3
0 [[ -1, -1, 1, 0],
1  [  2,  2, 1, 0],
2  [  0,  0, 0, 0]]


 */

//for loop rows
//for loop cols nested for loop
//bombs to represent the areas on the field where they should be placed
//if there is a bomb left, right , up and down diangoal 
//if no bombs we would return 
//if there is a bomb then we know below we would mark that as 1 += 1
// markSeen(bombs, i+ 1, j)
// markSeen(bombs, i- 1, j)
// markSeen(bombs, i, j-1)
// markSeen(bombs, i, j+1)
// markSeen(bombs, i +1, j+1)
// markSeen(bombs, i +1, j-1)
// markSeen(bombs, i -1, j-1)
// markSeen(bombs, i +1, j+1)

// bombs: [[0,0],[0,1]]
// bombs[0]: [0,0]
// bombs[0][0]: 0
// bombs[0][1]: 0


//support@interviewing.io,
const mineSweeper = (bombs, rows, cols) => {
  let grid = [];
  
  var i;
  for(i = 0; i < rows; i++){
    let row = Array(cols).fill(0);

    grid.push(row) 
  }
  
  
  for(let i = 0; i < bombs.length;i++) {
    let currentBomb = bombs[i]
    let row = currentBomb[0]
    let col = currentBomb[1]
    grid[row][col] = -1
    
    //if we have seen a bomb we need to look in all directions
    // place a 1 to rep that we have seen a bomb in all of those places 
    //once we have seen a bomb mark it as seen. increment the 1s
    
    //if there is a bomb then add a 1 then call func to add a 1
    const markSeen = (grid, row, col)=> {
      if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === -1) {
        return;
      }
      grid[row][col] += 1
    
    }
    
    markSeen(grid, row+ 1, col)
    markSeen(grid, row- 1, col)
    markSeen(grid, row, col-1)
    markSeen(grid, row, col+1)
    markSeen(grid, row +1, col+1)
    markSeen(grid, row +1, col-1)
    markSeen(grid, row -1, col-1)
    markSeen(grid, row -1, col+1)
    
    // grid[row][col] = 1
    // if(i > 0 || i >= grid.length || j > 0 || j >= grid.length ||
  }
  
  return grid
}
    