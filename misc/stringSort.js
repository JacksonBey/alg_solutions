// Your task is to sort a given string. Each word in the string will contain a single number. 
//This number is the position the word should have in the result.

function stringSort(string){
    let splitString = string.split(' ')
    let newString = []
    for(let i = 1; i <= splitString.length ; i++){
        splitString.forEach(word => {
            if (word.indexOf(i) !== -1){
                newString.push(word)
    }
    })
    }
    return newString.join(' ')
    }
    