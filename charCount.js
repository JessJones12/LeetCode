const charCount = (str) =>{
    const obj = {};
  
    for(let i = 0; i < str.length;i ++){
      let char = str[i].toLowerCase();
      if(/[a-z0-9]/.test(char)){
        if(obj[char] === undefined){
          obj[char] =1
        } else {
          obj[char] +=1
        }
      }
    }
    return obj;
  }
  
  console.log(charCount('jess'))

  //obj[char] = ++obj[char] || 1