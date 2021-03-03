// Lonely Integer
// There are N integers in an array A. 
// All but one integer occurs in pairs. 
// Your task is to find out the number that occurs only once.

// input: array of integers
// output: integer

// simple solution
let array1 = [1]
let array2= [0,1,1,0,7]
let array3= [1,2,3,3,2]

//sort array
//then check which number does not have a pair using Object.entries


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

// console.log(LoneInteger(array2))


//solution using cool XOR bitwise operation!
const CoolSolution = (array) => {
  let a = array.reduce((a,b) => a ^ b,0)
  return a
}

// console.log(CoolSolution(array1))

const howCool=(array)=>{
  //just for if 1 element, disregard
  if(array.length === 1) return array[0]
  // important
  let total=0
  for(let i=1;i<array.length; i++){
    total = array[i-1] ^ array[i]
    console.log('i',i,'total in loop',total)
  }
  return total
}

console.log(howCool(array3))