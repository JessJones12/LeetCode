//2 arrays return true if squared is in second arrays


function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length;i++){
        let correctIndex = arr2.indexOf(arr[i] **2)
            if(correctIndex === -1){
                return false
            }
            arr2.splice(correctIndex,1)
        }
    
    return true
}

console.log(same[1,2,3,4], [9,1,4,4])
{1:1, 2:1, 3:1, 4:1}---> 2
{9:1,1:1,4:2}

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        if(frequencyCounter1[val] === undefined){
            frequencyCounter1[val] =1
        } else {
            frequencyCounter1[val] +=1
        }
    for(let val of frequencyCounter2){
        if(frequencyCounter2[val] === undefined){
            frequencyCounter2[val] =1
        } else {
            frequencyCounter2[val] +=1
        }
    }
    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            // frequencyCounter2[key**2] === undefined
            return false
        }
        if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
            //num of times it shows us
            return false 
        }
    }
       return true  
    }

}
