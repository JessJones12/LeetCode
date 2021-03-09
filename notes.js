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
//time: o n(2) loop through twice
//Space: o(1)

var isAnagram = function(s, t) {
if(s.length !== t.length) {
    return false;
}
let currentCount = {};
for(let letter of s){  //"c" , "a", "r" ,"e"
    if(currentCount[letter] === undefined) {
        currentCount[letter] =1;  // "c:1", "a:"...
    } else{
        currentCount[letter] +=1
    }
}
for(let letter of t){
    if(currentCount[letter] === undefined) {  //earau
        return false 
    }
    if(currentCount[letter] < 1){
        return false 
    }
    currentCount[letter] --
}
 return true 
};