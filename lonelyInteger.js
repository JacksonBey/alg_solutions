// Lonely Integer
// There are N integers in an array A. 
// All but one integer occurs in pairs. 
// Your task is to find out the number that occurs only once.

// input: array of integers
// output: integer

// simple solution
let array1 = [1]
let array2= [0,0,1]
let array3= [1,2,3,3,2]

//sort array
//then check which number does not have a pair using some method (tbd)


const LoneInteger=(array)=>{
  if (array.length===1){
    return array[0]
  }
  let count={}
  
  for(let i=0;i<array.length;i++){
    if (!count[array[i]]){
      count[array[i]]=1
    } else {
      count[array[i]] +=1
    }
  }
  for (const [key, value] of Object.entries(count)) {
    if(value === 1){
      return key
    };
  }

}

console.log(LoneInteger(array3))


//solution using cool XOR bitwise operation!
const CoolSolution = (array) => {

}