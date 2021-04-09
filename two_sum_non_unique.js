

function twoSum(num, target){
    
    let seen = {};
      let answer = []
    
    for(let i = 0; i < num.length; i++){  // [2,7,11,15]
        let currentNum = num[i];
        
        let numNeeded = target - currentNum; // 9-7 = 2
        
        if(seen[numNeeded] === undefined){  // 
            seen[currentNum] = i  // {2:0} //
        } else {
            firstIndex = seen[numNeeded];  //{2:0}
           answer.push([numNeeded, num[i]])//2,7
        }
    }
  
    return answer
  
  }
  let num = [2,7,8,1]
  let target = 9
  console.log(twoSum(num, target))