// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

//ignore non characters
//ignore case sensitive 
//pointers keep track of beginning and end 
//continue to move in  and return true if all letters match

var isPalindrome = function(s) {
    if(s.length === 1) return true; //if only 1 character will always return true 
    
    s = s.toLowerCase()  //make sure not case sensitive 
    
    let characters = "abcdefghijklmnopqrstuvwxyz1234567890" // let these be the characters 
    
    let i = 0
    let j = s.length - 1
    while(i < j) {  //loop throught the string 
        let char1 = s[i];
        let char2 = s[j]
        
        if(!characters.includes(char1)){
            i++
                continue;  
        }
        if(!characters.includes(char2)){
            j--
            continue; 
        }
        
        if(char1 !== char2) return false
        i++
        j--
    }
    
    return true;
};