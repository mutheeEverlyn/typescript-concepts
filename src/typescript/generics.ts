//generics are used  to allow different types in your code to enable code reusability
//importance of generics
//1.code reusability
//2.type safety
//3.avoiding code duplication

const generics=()=>{
//case 1:returning an array of numbers
const numberArray=(input:number):number[]=>{
return[input];
}
console.log(numberArray(2))

//case 1:returning an array of string
const stringArray=(input:string):string[]=>{
return[input]
}
console.log(stringArray("evah"))

//case 1:returning an array of object
const objectArray=(input:object):object[]=>{
return [input]
}
console.log(objectArray({name:"evah",age:22}))

//using generics we can combine the three cases to 1 block of code
const convert =<T>(input:T):T[]=>{
return [input]
}
console.log(convert(5))
console.log(convert("hello"))
console.log(convert({name:"kamau",age:30}))

//generics with two parameters of different data types
const result=<G,M>(grade:G,marks:M):[G,M]=>{
return[grade,marks]
}
console.log(result("A",436))
}
export default generics;