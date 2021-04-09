function removeDups(array){
let hash = {};

for(let char of array){
  if(hash[char]=== undefined){
    hash[char] = 1
  } else {
    hash[char] +=1
  }
}

  let ans = [];
for(const [key, value] of Object.entries(hash)){
  if(value >= 2){
    ans.push(key)
  }
}

return ans;
}

console.log(removeDups([1,2,2,3,3,5,2]))