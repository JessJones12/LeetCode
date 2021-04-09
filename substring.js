
// Example: 
// input: ['abc', 'bcd', 'cde']

// output: {
//     a: [b, c],  # b appears in 1 word with a, c appears in 1 word with a
//     b: [c],     # c appears in 2 words with b, a and d each appear in only 1 word with b
//     c: [b, d],  # b appears in 2 words with c, d appears in 2 words with c. But a and e each 
//                   appear in only 1 word with c.
//     d: [c],     # c appears in 2 words with d. But b and e each appear in only 1 word with d
//     e: [c, d],  # c appears in 1 word with e, d appears in 1 word with e  
//   }

// "abc"
//input: ['abc', 'bcd', 'cde']

//allOccurrences:
// {
//"a": {"b":1, "c":1}
//"b": {"a":1, "c":2, "d:1"}
// }

//get counts of all occurrences: 
//{
//   a: {b:1, c:1}
//   b: {a:1, c:2, d:1}
// }


// turn counts into an array with only letters with most occurrences"
// {a: [b,c]}


function letterOccurrence(arr){
    let allOccurrences ={} //store all letters in a hash;
  
    for(let word of arr){ //word = "abc"
      for(let char1 of word){//char1 = "a"
        for(let char2 of word){//char2= "b"
          if(char1 === char2){ //if same letter we don't want to count it twice 
            continue
          }
          if(allOccurrences[char1] === undefined){ //{a:}
            allOccurrences[char1] = {}
          }
          if(char2 in allOccurrences[char1]){
            allOccurrences[char1][char2] += 1
            
          } else {
            allOccurrences[char1][char2] = 1 
          }
        }
      }
    }
  }